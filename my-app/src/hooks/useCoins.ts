import useSWR from 'swr';
import postCoins from '@/services/postCoins';


export const useCoins = () => {
    const { data, error, isLoading } = useSWR(`https://tstapi.cryptorank.io/v0/coins/`, postCoins.getCoins);

    return {
        coins: data?.data,
        isLoading,
        isError: error
    };
};