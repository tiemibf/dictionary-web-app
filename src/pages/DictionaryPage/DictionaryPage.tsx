import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { WordDefinition } from "../../components/WordDefinition/WordDefinition";
import { GetDefinitionResponse } from "../../types/Dictionary.types";


const DictionaryPage = () => {
    const [wordDefinitions, setWordDefinitions] =
        useState<GetDefinitionResponse[]>();

    return (
        <>
            <Header />
            <Input setResponse={setWordDefinitions} />
            {wordDefinitions &&
                wordDefinitions.map((definition) => {
                    return <WordDefinition word={definition} />;
                })}
        </>
    );
};

export default DictionaryPage;
