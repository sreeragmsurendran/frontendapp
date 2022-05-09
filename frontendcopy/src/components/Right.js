import React from 'react'
import notification from '../images/notification-new.svg'
import message from '../images/Group3218.svg'
import eclipse from '../images/Ellipse217.png'
import three from '../images/Group712.svg'
import styled from 'styled-components'

export const Right = () => {
  return (
    <RightContent>
        <Time>
            <p><span>10:10 AM</span> 11/25/2020</p>
        </Time>
        <Icons>
            <img src={message} alt=''/>
            <img src={notification} alt=''/>
            <p>Savad Farooque</p>
            <img src={eclipse} alt=''/>
            <img src={three} alt=''/>
        </Icons>
    </RightContent>
  )
}

const RightContent =styled.div`
display: flex;
margin-left: 2rem;
width: 500px;
background: white;
align-items: center;
height: 60px;
border-radius: 0 0  0 30px;

`
const Time =styled.div`
display: flex;
align-items: center;
margin: 0 1rem;
background-color: #202020;
color: white;
padding: 8px 25px ;
border-radius: 30px;
p{
    font-size: 10px ;
    font-weight:400;
    span{
        font-size: 16px ;
        font-weight:700;
        letter-spacing:2px;
    }
}

`

const Icons =styled.div`
display: flex;
gap: 1rem;
align-items: center;
margin-left: 1rem;

padding: 10px;
border-radius: 30px;
font-size: 11px;
font-weight: 600;

`
