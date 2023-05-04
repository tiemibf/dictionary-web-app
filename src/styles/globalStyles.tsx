import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*": {
        margin: 0, 
        padding: 0, 
        boxSizing: 'border-box',
    },
    "body": {
        background: "#f8f8f8",
        color:"#29292e",
    },
    "body, input, button, textarea": {
        fontWeight:400,
        fontSize:"16px",
        fontFamily: "Roboto, sans-serif"
    },
    
})