import { SearchIcon } from "assets/images/SearchIcon";
import { FormStyle } from "./Input.style";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import WordDefinition from "components/WordDefinition/WordDefinition";
import { IWordResponse } from "App";

interface IInputProps {
setResponse: Dispatch<SetStateAction<IWordResponse | undefined>>
}

export const Input = ({setResponse}: IInputProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSearch = async (event: any) => {
        event.preventDefault();
        try {
            const { data } = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
            );
            const wordObject = data[0]
           setResponse(wordObject)
        } catch (error: any) {
            console.log(error?.response?.data["title"]);
        }
    };

    return (
        <FormStyle onSubmit={handleSearch}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">
                <SearchIcon />
            </button>
        </FormStyle>
    );
};
