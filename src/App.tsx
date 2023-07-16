import { globalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import WordDefinition from "components/WordDefinition/WordDefinition";
import { Header } from "components/Header/Header";
import { Input } from "components/Input/Input";
import { useState } from "react";
import { IMeaningsProps } from "components/WordDefinition/Word.type";

interface IPhoneticsProps {
    audio: string;
    text: string;
    license?: {
        name: string;
        url:string;
    };
    sourceUrl?: string
}

export interface IWordResponse {
    license: {
        name: string;
        url:string;
    },
    meanings: IMeaningsProps[];
    phonetic: string;
    phonetics: IPhoneticsProps;
    sourceUrls: string[];
    word: string
}

function App() {
    globalStyles();
    const [wordObject, setWordObject] = useState<IWordResponse>()

    return (
        <BrowserRouter>
            <Router />
            <Header />
            <Input  setResponse={setWordObject}/>
            {wordObject && 
                <WordDefinition
                    word={wordObject?.word}
                    meanings={wordObject?.meanings}
                    phonetic={wordObject?.phonetic}
                    className="content"
                />
            }
        </BrowserRouter>
    );
}

export default App;
