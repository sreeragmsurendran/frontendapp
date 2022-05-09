import React from 'react'
import styled from 'styled-components'

import { Left } from './Left'
import { Right } from './Right'
export const Navbar = () => {
    return (
        <Main>
                <Left />
                <Right />
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    justify-content: space-between;
`;

