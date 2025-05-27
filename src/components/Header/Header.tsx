import { LogoIcon } from "../../assets/images/logo";
import { HeaderStyle } from "./Header.style";

export const Header = () => {
    return (
        <HeaderStyle>
            <LogoIcon />
            <p>Dictionary Web</p>
        </HeaderStyle>
    );
};
