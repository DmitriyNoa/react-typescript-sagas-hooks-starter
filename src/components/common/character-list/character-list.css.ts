import { css } from "emotion";
interface CharacterListCss {
    root?: string;
}

export const pocketsListStyles: CharacterListCss = {
    root: css({
        padding: 0,
        margin: 0,
        li: {
            listStyle: "none",
            padding: 0,
            margin: 0,
        }
    }),
};
