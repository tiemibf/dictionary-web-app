import { IconPlay } from "assets/images/icon-play";
import { WordMeaningBlock } from "components/WordMeaningBlock/WordMeaningBlock";
import { GetDefinitionResponse } from "types/Dictionary.types";
import { WordDefinitionStyle } from "./Word.style";

export interface IWordDefinitionProps {
    word: GetDefinitionResponse;
}

export const WordDefinition = ({ word }: IWordDefinitionProps) => {
    const { word: wordName, phonetic, meanings } = word;

    return (
        <WordDefinitionStyle>
            <div className="word-definition-heading">
                <div>
                    <h1>{wordName}</h1>
                    <p className="phonetic">{phonetic}</p>
                </div>
                <IconPlay />
            </div>
            <div>
                {meanings.map((meaning) => {
                    return (
                        <WordMeaningBlock
                            partOfSpeech={meaning.partOfSpeech}
                            definitions={meaning.definitions}
                            key={meaning.partOfSpeech}
                        />
                    );
                })}
            </div>
            <div className="divider" />
        </WordDefinitionStyle>
    );
};
