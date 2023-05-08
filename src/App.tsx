import { globalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import WordDefinition from "components/WordDefinition/WordDefinition";
import { Header } from "components/Header/Header";
import { Input } from "components/Input/Input";

const meanings = [
    {
        partOfSpeech: "exclamation",
        definitions: [
            {
                definition:
                    "used as a greeting or to begin a phone conversation.",
                example: "hello there, Katie!",
                synonyms: ["teste"],
                antonyms: []
            }
        ]
    },
    {
        partOfSpeech: "noun",
        definitions: [
            {
                definition: "an utterance of ‘hello’; a greeting.",
                example: "she was getting polite nods and hellos from people",
                synonyms: [],
                antonyms: []
            }
        ]
    },
    {
        partOfSpeech: "verb",
        definitions: [
            {
                definition: "say or shout ‘hello’.",
                example: "I pressed the phone button and helloed",
                synonyms: [],
                antonyms: []
            }
        ]
    }
];

function App() {
    globalStyles();
    return (
        <BrowserRouter>
            <Router />
            <Header />
            <Input />
            <WordDefinition
                word="keyboard"
                phonetic={"/ˈkiːbɔːd/"}
                meanings={meanings}
                className="content"
            />
        </BrowserRouter>
    );
}

export default App;
