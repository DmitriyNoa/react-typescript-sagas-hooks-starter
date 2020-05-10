import {css} from "emotion";

interface IButtonCss {
    root?: string;
}

export const buttonStyles: IButtonCss = {
    root: css({
        border: 0,
        outline: 0,
        fontSize: "1.5rem",
        borderRadius: "1.5rem",
        padding: "1.5rem 1rem",
        backgroundColor: "#ebecf0",
        textShadow: "1px 1px 0 #fff",
        color: "#61677C",
        fontWeight: "bold",
        boxShadow: "-5px -5px 10px #ffffff,  5px 5px 10px #babecc",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        display: "block",
        width: "100%",
        "&:hover": css({
            boxShadow: "-2px -2px 5px #ffffff, 2px 2px 5px #babecc",
        }),
        "&:active": css({
            boxShadow: "inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff",
        })
    }),
}