import { styled } from "@stitches/react";

export const WordStyle = styled("div", {
    marginBottom: "32px",
    width: "100%",
    lineHeight: "30px",
    h4: {
        fontWeight: 400,
        color: "#757575",
        paddingRight: "24px"
    },
    li: {
        paddingLeft: "25px",
        "&::marker": {
            color: "#A445ED"
        }
    },
    ".partOfSpeech": {
        display: "flex",
        alignItems: "center",
        fontStyle: "italic",
        fontWeight: 700,
        marginBottom: "16px",
        h3: {
            marginRight: "20px"
        }
    },
    ".example": {
        paddingLeft: "48px",
        color: "#757575"
    },
    ".synonyms": {
        display: "flex",
        marginTop: "28px",
        fontWeight: 700,
        color: "#A445ED"
    }
});

export const WordDefinitionStyle = styled("div", {
    ".phonetic": {
        color: "#A445ED",
        fontSize: "20px",
        lineHeight: "24px"
    },
    ".word-definition-heading": {
        marginBottom: "40px"
    }
});
