import React from 'react'
import profile1 from '../images/512.png'
import arrow from '../images/Iconionic-ios-arrow-down.svg'
import QuickIcon from '../images/Group860.svg'
import styled from 'styled-components'

export const Left = () => {
  return (
    <LeftContent>
        <Image>
            <Profile>
            <img src={profile1} alt=''/>
            <p>Savad Farooque</p>
            </Profile>
            <DownArrow>
                <img src={arrow} alt=''/>
            </DownArrow>
           
        </Image>
        <Quick>
            <img src={QuickIcon} alt=''/>
            <p>Quick Menu</p>
        </Quick>
    </LeftContent>
  )
}

const LeftContent =styled.div`
display: flex;
margin-left: 6rem;
width: 500px;
background: white;
align-items: center;
height: 60px;
border-radius: 0 0  30px 30px;
margin-right: 1rem;
`
const Image =styled.div`
display: flex;
align-items: center;
margin: 0 1rem;

`
const Profile =styled.div`
display: flex;
align-items: center;

img{
    margin-left:1rem;
}
p{
    font-weight: 600;
    margin-left:1rem;
    
}
`
const DownArrow =styled.div`
 background:white;
 border: 3px solid #EBEBEB;
 margin-left:2rem;
 height: 30px;
 width: 30px;
 align-content: center;
 border-radius: 100%;
 text-align: center;

 img{
    background:white;
    
    
 }
 `
const Quick =styled.div`
display: flex;
background-color: white;
margin-left: 1rem;
border: 3px solid  #EBEBEB ;
padding: 10px;
border-radius: 30px;
margin-right: 1rem;
p{
    margin-left: 1rem;
}
`
