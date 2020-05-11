import { css } from "emotion";
interface ExchangeCss {
    root?: string;
    h2?: string;
    userPockets?: string;
    currenciesExchange?: string;
    exchangeForm?: string;
    rate?: string;
}

export const exchangeStyles: ExchangeCss = {
    root: css({
        padding: "2rem",
        display: "flex",
        h2: css({
            fontSize: "2rem",
            textTransform: "uppercase",
        }),
    }),
    userPockets: css({
        width: "30%",
    }),
    currenciesExchange: css({
        padding: "0 2rem",
    }),
    exchangeForm: css({
        marginBottom: "2rem"
    }),
    rate: css({
        color: "#cc0000"
    }),
};