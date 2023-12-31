import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import useSWR from 'swr';
import postCoins from '@/services/postCoins';

const LIMIT_COINS = 10;

interface Currency {
    name: string,
    price: number,
    amount: number
};

type SelectNames = 'first' | 'second'

const useConverter = () => {
    const { data, isLoading } = useSWR(`https://api.cryptorank.io/v1/currencies/?api_key=1dbff11f3de8b6cc2ea6360d1144d3d4a0793009e59523639be7d3f52914`, (url) => postCoins.getCurrency(url, {
        limit: LIMIT_COINS,
    }));

    const currencies = useMemo(() => data?.data?.data || [], [data])

    const normalizedCurrencies: Currency[] = useMemo(() => {

        return currencies.map((currency) => {

            const price = currency.values.USD.price;

            return {
                price,
                name: currency.name,
                amount: 1
            };
        });
    }, [data]);

    
    useEffect(() => {
        const hasCurrencies = !!currencies.length
        const areCurrenciesSet = !!first && !!second
        const shouldSetInitial = hasCurrencies && !areCurrenciesSet
        if (shouldSetInitial) {
            initializeCurrenciez()
        }
    }, [currencies])

    const initializeCurrenciez = () => {
        const [first, second] = normalizedCurrencies
        const secondWithAmount = calculateSecondAmount(first, second)

        setFirst(first)
        setSecond(secondWithAmount)
    }
    const currencyNames = useMemo(
        () => normalizedCurrencies.map((currency) => currency.name),
        [normalizedCurrencies]
    );


    const [first, setFirst] = useState<Currency | null>(null);
    const [second, setSecond] = useState<Currency | null>(null);

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>, name: SelectNames) => {
        const currencyName = event.target.value
        const newCurrency = normalizedCurrencies.find(({ name }) => name === currencyName) as Currency

        const actions = {
            first: handleChangeFirst,
            second: handleChangeSecond
        }

        actions[name](newCurrency)
    };

    const handleChangeFirst = (currency: Currency) => {
        const updatedFirst = {
            ...currency,
            amount: first!.amount
        }
        setFirst(updatedFirst)
        const updatedSecond = calculateSecondAmount(updatedFirst, second as Currency)
        setSecond(updatedSecond)
    }

    const handleChangeSecond = (currency: Currency) => {
        const updatedSecond = {
            ...currency,
            amount: second!.amount
        }
        const updatedSecondWithCalculatedAmount = calculateSecondAmount(first as Currency, updatedSecond)
        setSecond(updatedSecondWithCalculatedAmount)
    };

    const calculateAmount = (first: Currency, second: Currency) => {
        const firstAmountPrice = first.amount * first.price;
        const secondAmountPrice = firstAmountPrice / second.price
        return secondAmountPrice;
    };

    const calculateSecondAmount = (first: Currency, second: Currency) => {
        const amountSecond = calculateAmount(first, second as Currency);
        const updatedSecond = { ...second, amount: amountSecond } as Currency
        return updatedSecond
    }
    const handleChangeAmount = (amount: number) => {
        const updatedFirst = { ...first, amount: amount } as Currency
        setFirst(updatedFirst)

        const updatedSecond = calculateSecondAmount(updatedFirst, second as Currency)
        setSecond(updatedSecond as Currency)
    };

    const handleSwipeCurrencies = () => {
        setFirst(second)
        setSecond(first)
    };


    return {
        normalizedCurrencies,
        currencyNames,
        first,
        setFirst,
        second,
        setSecond,
        handleChangeSelect,
        handleChangeSecond,
        isLoading,
        handleChangeAmount,
        handleSwipeCurrencies
    }
}

export default useConverter;