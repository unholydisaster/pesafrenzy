import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoginForm from '@/components/login';
import Registration from '@/components/register';



const Div=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
width:20%;
left:75%;
position:relative;
top:10px;

`
const Button=styled.button`
width:100px;
padding:10px 15px;
margin-left:10px;
cursor:pointer;
background:rgb(31,136,61);
color:white;
border-radius:5px;
display:${({open2})=>open2?"grid":"none"}
`
const MyHome = () => {
const [open,setOpen]=useState(true)
const [open1,setOpen1]=useState(true)
const [open2,setOpen2]=useState(true)

const handleClick=()=>{
  setOpen(!open)
  setOpen2(!open2)
}
const handleClick2=()=>{
  setOpen1(!open1)
  setOpen2(!open2)
}

  return (
    <>
      <Div>
        <Button onClick={handleClick} open2={open2}>Login</Button>
        <Button onClick={handleClick2} open2={open2}>Register</Button>
      </Div>
      </>
  );
};

export default MyHome;

