import useSWR from 'swr';
import postCoins from '@/services/postCoins';
import { calculateAthState } from '@/system/utils';
import { useMemo } from 'react';

const LIMIT_COINS = 10;

interface Coin {
    name: string,
    price: string,
    availableSupply: number,
    athMarketCap: string,
    category: string,
    athPrice: string
    fromAth: string,
    toAth: string,
};

export const useCoins = () => {

    const { data, error, isLoading } = useSWR(`https://tstapi.cryptorank.io/v0/coins/`, (url) => postCoins.getCoins(url, {
        limit: LIMIT_COINS,
    }));

    const normalizedCoins: Coin[] = useMemo(() => {
        const coins = data?.data?.data || [];

        return coins.map((coin) => {
            const price = `$ ${Math.round(coin.price.USD)}`;
            const athMarketCap = `${coin.athMarketCap.USD}`;
            const fromAth = `${calculateAthState(coin.athPrice.USD, coin.price.USD).fromAth} %`;
            const toAth = `${calculateAthState(coin.athPrice.USD, coin.price.USD).toAth} %`;
            const athPrice = `${coin.athPrice.USD}`;

            return {
                ...coin,
                price,
                athMarketCap,
                fromAth,
                toAth,
                athPrice
            };
        });
    }, [data]);

    return {
        coins: normalizedCoins,
        isLoading,
        error,
        normalizedCoins,
    };
};