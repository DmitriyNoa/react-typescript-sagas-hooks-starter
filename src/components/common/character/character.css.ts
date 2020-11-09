import { css } from "emotion";
interface CharacterCss {
    root?: string;
    pocketName?: string;
    pocketBalance?: string;
}

export const pocketStyles: CharacterCss = {
    root: css({
        padding: "2rem",
        alignItems: "center",
        backgroundColor: "#afd275",
        boxShadow: `5px 5px 8px 0 rgba(0, 0, 0, 0.25),
                    -4px -4px 6px 0 rgba(255, 255, 255, 0.3)`,
        borderRadius: "1rem",
        justifyContent: "right",
        marginRight: "4rem",
        width: "100%",
        boxSizing: "border-box",
        marginBottom: "2rem",
        color: "#222222"
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
