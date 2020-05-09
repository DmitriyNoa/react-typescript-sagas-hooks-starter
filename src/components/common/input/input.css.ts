import { css } from "emotion";
interface InputCss {
    root?: string;
}

export const inputStyles: InputCss = {
    root: css({
        border: 0,
        outline: 0,
        borderRadius: "1rem",
        backgroundColor: " #ebecf0",
        textShadow: "1px 1px 0 #ffffff",
        padding: "2rem",
        fontSize: "2rem",
        marginRight: "2rem",
        boxShadow:  "inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff",
        width: "100%",
        boxSizing: "border-box",
        transition: "all 0.2s ease-in-out",
        appearance: "none",
        "&:focus":  css({
            boxShadow:  "inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff"
        })
    })
};