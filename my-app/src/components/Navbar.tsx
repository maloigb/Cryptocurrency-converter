import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 100%;
`;

const Nav = styled.nav`
    background-color: #6c6c6c63;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .link {
        background-color: #f8f1f17c;
        color: black;
        border: 2px solid #6c6c6c63;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin-right: 5px;
        border-radius: 5px;
        transition: 0.3s;
    }

    .link:hover {
        color: #000000;
        background-color: #f2f0f0;
        border: 2px solid #6c6c6c63;
    }
`;

const Navbar = () => (
        <Container>
            <Nav>
                <Link className='link' href="/">Конвертер</Link>
                <Link className='link' href="/coins-list">Таблица</Link>
            </Nav>
        </Container>
    );

export default Navbar;