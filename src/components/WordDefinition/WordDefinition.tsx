import { WordDefinitionStyle, WordStyle } from "./Word.style";
import { IMeaningsProps, WordDefinitionProps } from "./Word.type";

export const WordMeaningBlock = ({
    partOfSpeech,
    definitions
}: IMeaningsProps) => {
    return (
        <WordStyle>
            <div className="partOfSpeech">
                <h3>{partOfSpeech}</h3>
                <hr className="divider" />
            </div>
            <h4>Meaning</h4>
            {definitions.map((definition) => {
                return (
                    <>
                        <li>{definition.definition}</li>
                        <p className="example">"{definition.example}"</p>
                        {definition?.synonyms?.length !== 0 && (
                            <div className="synonyms">
                                <h4>Synonyms</h4>
                                <p>{definition.synonyms}</p>
                            </div>
                        )}
                    </>
                );
            })}
        </WordStyle>
    );
};

const WordDefinition = ({ word, phonetic, meanings }: WordDefinitionProps) => {
    return (
        <WordDefinitionStyle>
            <div className="word-definition-heading">
                <h1>{word}</h1>
                <p className="phonetic">{phonetic}</p>
            </div>
            <div>
                {meanings.map((meaning) => {
                    return (
                        <WordMeaningBlock
                            partOfSpeech={meaning.partOfSpeech}
                            definitions={meaning.definitions}
                        />
                    );
                })}
            </div>
            <rect className="divider" />
        </WordDefinitionStyle>
    );
};

export default WordDefinition;
