export interface WordDefinitionProps {
    word: string;
    phonetic: string | string[];
    meanings: MeaningsProps[];
    className?: string;
}

export interface MeaningsProps {
    partOfSpeech: string;
    definitions: DefinitionsProps[];
}

export interface DefinitionsProps {
    definition: string | string[];
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
}
