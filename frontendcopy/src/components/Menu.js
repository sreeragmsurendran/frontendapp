import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import dashboard from '../images/Dashboard.svg'
import sales from '../images/Group793.svg'
import purchase from '../images/Group794.svg'
import payments from '../images/Group791.svg'
import products from '../images/Group788.svg'
import contacts from '../images/Group787.svg'
import repots from '../images/Report.svg'
import accounts from '../images/Group789.svg'
import more from '../images/Group3215.svg'
export const Menu = () => {
  return (
    <MainMenu>
    <NavContent>
    <Logo>
        <img src={logo} alt="logo" />
    </Logo>
    <Icons>
    <MenuIcons>
        <img src={dashboard} alt="" />
        <img src={sales} alt="" />
        <img src={purchase} alt="" />
        <img src={payments} alt="" />
        <img src={products} alt="" />
        <img src={contacts} alt="" />
        <img src={repots} alt="" />
        <img src={accounts} alt="" />
        <img src={more} alt="" />
        
    </MenuIcons>
    <SubMenu>
        <ul>
            <li>Dashboard</li>
            <li>Sales</li>
            <li>Purchase</li>
            <li>Payments</li>
            <li>Products</li>
            <li>Contacts</li>
            <li>Reports</li>
            <li>Accounts</li>
            <li>More</li>
        </ul>
    </SubMenu>
    </Icons>
    
    </NavContent>

</MainMenu>
  )
}

const MainMenu = styled.div`
display: flex;
position: absolute;
top:0;
left: 2;
margin: 1rem;
justify-content: space-between;



gap: 1rem;
`
const NavContent = styled.div``
const Logo = styled.div`

img{
    background: #ffff;
    padding: 1rem;
    border-radius: 1rem;
}

`
const SubMenu = styled.div`
   display: none;
    transition: all 2s ease-out;
   
ul{
    list-style-type: none;
    background-color: #202020;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    li{
        margin: 2rem;
    }
}
`
const Icons = styled.div`
display: flex;
gap: 1rem;
&:hover ${SubMenu}{
    display: block;
}
`


const MenuIcons = styled.div`
display: flex;
flex-direction:column;
gap: 1.6rem;
background-color: #202020;
width: 4rem;
padding: 1rem;
border-radius: 1rem;

img{
    background-color: #202020;
}
`

const MenuList = styled.div``

