
export const calculateAthState = (ath : number = 0, currentPrice : number = 0) => {

    const athDivider = ath || 1
    const currentPriceDivier = currentPrice || 1

    const fromAth = ((currentPrice - ath) / athDivider) * 100;

    const toAth = ((ath - currentPrice) / currentPriceDivier) * 100;

    const roundedFromAth = parseFloat(fromAth.toFixed(2));
    const roundedToAth = parseFloat(toAth.toFixed(2));

    return {
        fromAth: roundedFromAth,
        toAth: roundedToAth,
    };
};



