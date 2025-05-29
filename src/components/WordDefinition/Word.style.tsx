import { styled } from "styled-components";

export const WordStyle = styled.div`
    margin-bottom: 32px;
    width: 100%;
    line-height: 30px;
    h4 {
        font-weight: 400;
        color: #757575;
        padding-right: 24px;
    }
    li {
        padding-left: 25px;
        &::marker {
            color: #A445ED;
        }
    }
    .partOfSpeech {
        display: flex;
        align-items: center;
        font-style: italic;
        font-weight: 700;
        margin-bottom: 16px;
        h3 {
            margin-right: 20px;
        }
    }
    .example {
        padding-left: 48px;
        color: #757575;
    }
    .synonyms {
        display: flex;
        margin-top: 28px;
        font-weight: 700;
        color: #A445ED;
    }
`;

export const WordDefinitionStyle = styled.div`
    .phonetic {
        color: #A445ED;
        font-size: 20px;
        line-height: 24px;
    }
    .word-definition-heading {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
