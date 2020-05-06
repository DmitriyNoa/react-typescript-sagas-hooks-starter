import { css } from "emotion";
interface PocketCss {
    root?: string;
    pocketName?: string;
    pocketBalance?: string;
}

export const pocketStyles: PocketCss = {
    root: css({
        padding: "2rem"
    }),
    pocketName: css({
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#333",
    }),
    pocketBalance: css({
        fontSize: "1.5rem",
        color: "#333",
        marginTop: "1rem",
    }),
};