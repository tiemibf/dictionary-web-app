import { WordStyle } from "components/WordDefinition/Word.style";
import { IMeaningsProps } from "components/WordDefinition/Word.type";

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
                        {definition.example && (
                            <p className="example">"{definition.example}"</p>
                        )}
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
