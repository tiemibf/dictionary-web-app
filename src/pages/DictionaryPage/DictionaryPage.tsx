import { Header } from "components/Header/Header";
import { Input } from "components/Input/Input";
import { WordDefinition } from "components/WordDefinition/WordDefinition";
import { useState } from "react";
import { IWordResponse } from "types/Dictionary.types";

const DictionaryPage = () => {
    const [wordDefinitions, setWordDefinitions] = useState<IWordResponse[]>();

    return (
        <>
            <Header />
            <Input setResponse={setWordDefinitions} />
            {wordDefinitions &&
                wordDefinitions.map((definition) => {
                    return (
                        <WordDefinition
                            word={definition?.word}
                            meanings={definition?.meanings}
                            phonetic={definition?.phonetic}
                            className="content"
                        />
                    );
                })}
        </>
    );
};

export default DictionaryPage;
