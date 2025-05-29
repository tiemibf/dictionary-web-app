import { styled } from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    background-color: #F4F4F4;
    border-radius: 8px;
    border-style: none;
    margin-bottom: 40px;

    input {
        background-color: transparent;
        border-style: none;    
        width: 100%;
        height: 48px;
        font-weight: 700;
        padding: 0 24px;
        &:focus {
            outline: none;
            border: 1px solid #A445ED;
            border-radius: 8px;
        }
    }
    button {
        background-color: transparent;
        border-style: none;
        position: absolute;
        margin-right: 24px;
    }
`;
