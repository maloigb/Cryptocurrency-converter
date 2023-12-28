export interface Coin {
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
}