import React from 'react';
import { useCoins } from '@/hooks/useCoins';
import styled from 'styled-components';
import Coin from '@/components/Coin';

const Table = styled.table`
    text-decoration: none;
    border-collapse:collapse;
    width:100%;
    text-align:center;
    `;

const Th = styled.th`
    font-weight:normal;
    font-size:21px; 
    color:#7a7a7a;
    background-color:#2b2b2b;
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


const Index = () => {

    const { coins, error, isLoading, normalizedCoins } = useCoins();

    return (
        <>
            <Table>
                <thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Circulating supply</Th>
                        <Th>Market Cap</Th>
                        <Th>Category</Th>
                        <Th>From ATH</Th>
                        <Th>to ATH</Th>
                    </Tr>
                </thead>
                <tbody>
                    {
                        coins?.map((coin) => (
                            <Tr key={coin.name}>
                                <Coin coin={coin} />
                            </Tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default Index;