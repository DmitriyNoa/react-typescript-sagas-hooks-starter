import { css } from "emotion";
interface ISelectCss {
    root?: string;
    label?: string;
}

export const selectStyles: ISelectCss = {
    root: css({
        border: 0,
        outline: 0,
        borderRadius: "1rem",
        backgroundColor: " #ebecf0",
        textShadow: "1px 1px 0 #ffffff",
        padding: "1rem",
        fontSize: "1.5rem",
        boxShadow:  "2px 2px 5px #ffffff",
        boxSizing: "border-box",
        transition: "all 0.2s ease-in-out",
        appearance: "none",
        "&:focus":  css({
            boxShadow:  "1px 1px 2px #ffffff",
        }),
        "&::after": css({
            content: "",
            display: "inline-block",
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "15px 7.5px 0 7.5px",
            borderCcolor: "#6f6f6f transparent transparent transparent",
        }),
        cursor: "pointer"
    }),
    label: css({
        minWidth: "50px",
        display: "inline-block",
        fontSize: "1.5rem",
        cursor: "pointer"
    }),
};