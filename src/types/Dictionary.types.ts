export interface IDefinitions {
  definition: string | string[];
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface IMeanings {
  partOfSpeech: string;
  definitions: IDefinitions[];
  antonyms?: string[];
  synonyms?: string[];
}

interface ILicense {
  name: string;
  url: string;
}

interface IPhonetics {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: ILicense;
}

export interface GetDefinitionResponse {
  word: string;
  phonetic: string;
  phonetics: IPhonetics[];
  meanings: IMeanings[];
  license: ILicense;
  sourceUrls: string[];
}