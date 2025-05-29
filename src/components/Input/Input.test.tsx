import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

vi.mock('axios');

describe('Input Component', () => {
  const mockSetResponse = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders correctly', () => {
    render(<Input setResponse={mockSetResponse} />);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  it('updates input value when user types', () => {
    render(<Input setResponse={mockSetResponse} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    
    expect(input).toHaveValue('hello');
  });
  
  it('calls API and updates response when form is submitted', async () => {
    const mockData = [{ word: 'hello', phonetics: [], meanings: [] }];
    
    vi.mocked(axios.get).mockResolvedValueOnce({ data: mockData });
    
    render(<Input setResponse={mockSetResponse} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.dictionaryapi.dev/api/v2/entries/en/hello'
      );
      expect(mockSetResponse).toHaveBeenCalledWith(mockData);
    });
  });
  
  it('handles API error', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    
    const errorResponse = {
      response: {
        data: { title: 'No Definitions Found' }
      }
    };
    vi.mocked(axios.get).mockRejectedValueOnce(errorResponse);
    
    render(<Input setResponse={mockSetResponse} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'nonexistentword' } });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.dictionaryapi.dev/api/v2/entries/en/nonexistentword'
      );
      expect(consoleSpy).toHaveBeenCalledWith('No Definitions Found');
    });
  });
});
