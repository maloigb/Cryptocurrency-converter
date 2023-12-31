import axios, { AxiosResponse } from "axios";

interface Coin {
    name: string,
    price: {
        USD: number
    },
    availableSupply: number,
    athMarketCap: {
        USD: number
    },
    category: string,
    athPrice: {
        USD: number
    },
};

interface GetCoins {
    data: Coin[]
};

interface Currencies {
    name: string,
    values: {
        USD: {
            price: number
        }
    },

};

interface getCurrencies {
    data: Currencies[]
};


const CoinService = {
    getCoins: <Params>(url: string, params: Params) : Promise<AxiosResponse<GetCoins>> => axios.get(url, { params }),
    getCurrency: <Params>(url: string, params: Params) : Promise<AxiosResponse<getCurrencies>> => axios.get(url, { params }),
};

export default CoinService;