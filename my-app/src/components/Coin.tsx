import React from 'react';
import styled from 'styled-components';

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

type Props = {

    coin: Coin
};

const Td = styled.td`
    font-size:20px;
    color:#7a7a7a;
    white-space:pre-wrap;
    padding:11px 25px;
    line-height:20px;
    vertical-align: middle;
    border: 0px solid #0093fc;
    `;

const Tr = styled.tr`

    &:hover {
        background-color:#2b2b2b;
    }`;


const Coin = ({ coin }: Props) => (
    <>
        <Td>{coin.name}</Td>
        <Td>{coin.price}</Td>
        <Td>{coin.availableSupply}</Td>
        <Td>{coin.athMarketCap}</Td>
        <Td>{coin.category}</Td>
        <Td>{coin.fromAth}</Td>
        <Td>{coin.toAth}</Td>
    </>
);

export default Coin;