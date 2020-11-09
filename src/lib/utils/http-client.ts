import { config } from "../../config";
import {HttpResponse} from "../interfaces/Common";

const apiBaseURL = config.API_URL;

const get = async <T>(url: string): Promise<HttpResponse<T>> => {
    const finalURL = apiBaseURL + url;

    try {
        const response = await fetch(finalURL);
        const data = await response.json();

        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export {
    get
}
