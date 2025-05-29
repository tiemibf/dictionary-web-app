
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { SearchIcon } from "../../assets/images/SearchIcon";
import { GetDefinitionResponse } from "../../types/Dictionary.types";
import { FormStyle } from "./Input.style";

interface IInputProps {
    setResponse: Dispatch<SetStateAction<GetDefinitionResponse[] | undefined>>;
}

export const Input = ({ setResponse }: IInputProps) => {
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
            setResponse(data);
        } catch (error: any) {
            console.log(error?.response?.data["title"]);
        }
    };

    return (
        <FormStyle onSubmit={handleSearch} role="form">
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">
                <SearchIcon />
            </button>
        </FormStyle>
    );
};
