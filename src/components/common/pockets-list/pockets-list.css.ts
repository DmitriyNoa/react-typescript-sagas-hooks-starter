import { css } from "emotion";
interface PocketsListCss {
    root?: string;
}

export const pocketsListStyles: PocketsListCss = {
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