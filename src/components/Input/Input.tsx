import { SearchIcon } from "assets/images/SearchIcon";
import { FormStyle } from "./Input.style";

export const Input = () => {
    return (
        <FormStyle>
            <input type="text" />
            <button type="submit">
                <SearchIcon />
            </button>
        </FormStyle>
    );
};
