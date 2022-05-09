import React from 'react'
import styled from 'styled-components'

export const Content = () => {
  return (
    <MainContent>
        <Header>
            <h2>Price Checker</h2>
            <h4>Cancel</h4>
        </Header>
        <Search>
            <h2>Search For Item</h2>
            <h2>Price & Details</h2>
            <Input/>
            <Button>Check Price</Button>
        </Search>
    </MainContent>
  )
}
const MainContent = styled.div`
height: 313px;
width:455px;
align-items: center;
justify-content: center;
margin: 10rem auto;


  `
const Header = styled.div`
width: 455px;
height: 39px;
display: flex;
justify-content: space-between;
background-color: white;
padding:.5rem;
border-radius: 10px;
align-items: center;
margin-bottom: .5rem;
h4{
   color: #E60000;
}

`
const Search = styled.div`
display: flex;
flex-direction: column;
width: 455px;
height: 313px;
background-color: white;
align-items: center;
justify-content: center;
border-radius: 10px;
gap: .5rem;
`
const Input = styled.input`
margin-top: 1rem;
border: 1px solid #707070;
border-radius: 7px;
font-size: 35px;
width: 300px;
`
const Button = styled.button`
margin-top: 1rem;
border: none;
background-color: #07CC00;
color: #FFFFFF;
padding: .5rem  1rem;
border-radius: 10px;

`
