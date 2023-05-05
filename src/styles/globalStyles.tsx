import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Inter, sans-serif"
    },
    body: {
        height: "100vh",
        display: "flex",
        justifyContent: "center"
    },
    "#root": {
        width: "40%",
        maxWidth: "80%"
    },
    h1: {
        fontWeight: 700,
        fontSize: "48px",
        lineHeight: "68px"
    },
    ".phonetic": {
        color: "#A445ED",
        fontSize: "20px",
        lineHeight: "24px"
    },
    ".word-definition-heading": {
        marginBottom: "40px"
    },
    ".divider": {
        width: "100%",
        height: "1px",
        backgroundColor: "#E9E9E9",
        borderWidth: 0
    }
});
