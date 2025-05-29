import api from 'services/api';
import { GetDefinitionResponse } from 'types/Dictionary.types';

class DictionaryService {
  private endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  getDefinitions(word: string) {
    return api.get<GetDefinitionResponse>(this.endpoint, {
      params: word,
    })
  }
}

export const dictionaryService = new DictionaryService();