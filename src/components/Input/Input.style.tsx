import { styled } from "@stitches/react";

export const FormStyle = styled("form", {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    backgroundColor: "#F4F4F4",
    borderRadius: "8px",
    borderStyle: "none",
    marginBottom: "40px",
    input: {
        backgroundColor: "transparent",
        borderStyle: "none",
        width: "100%",
        height: "48px",
        fontWeight: 700,
        padding: "0 24px",
        "&:focus": {
            outline: "none",
            border: "1px solid #A445ED",
            borderRadius: "8px"
        }
    },
    button: {
        background: "transparent",
        borderStyle: "none",
        position: "absolute",
        marginRight: "24px"
    }
});
