import { WordMeaningBlock } from "components/WordMeaningBlock/WordMeaningBlock";
import { WordDefinitionStyle } from "./Word.style";
import { WordDefinitionProps } from "./Word.type";

export const WordDefinition = ({
    word,
    phonetic,
    meanings
}: WordDefinitionProps) => {
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
