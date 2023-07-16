export interface WordDefinitionProps {
    word: string;
    phonetic: string | string[];
    meanings: IMeaningsProps[];
    className?: string;
}

export interface IMeaningsProps {
    partOfSpeech: string;
    definitions: DefinitionsProps[];
    antonyms?: string[];
    synonyms?: string[]
}

export interface DefinitionsProps {
    definition: string | string[];
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
}
