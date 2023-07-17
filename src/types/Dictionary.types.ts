import { IMeaningsProps } from "components/WordDefinition/Word.type";

interface IPhoneticsProps {
  audio: string;
  text: string;
  license?: {
    name: string;
    url: string;
  };
  sourceUrl?: string;
}

export interface IWordResponse {
  license: {
    name: string;
    url: string;
  };
  meanings: IMeaningsProps[];
  phonetic: string;
  phonetics: IPhoneticsProps;
  sourceUrls: string[];
  word: string;
}