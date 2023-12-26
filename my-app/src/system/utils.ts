
export const calculateAthState = (ath : number, currentPrice : number) => {

    const fromAth = ((currentPrice - ath) / ath) * 100;

    const toAth = ((ath - currentPrice) / currentPrice) * 100;

    const roundedFromAth = parseFloat(fromAth.toFixed(2));
    const roundedToAth = parseFloat(toAth.toFixed(2));

    return {
        fromAth: roundedFromAth,
        toAth: roundedToAth,
    }
}

