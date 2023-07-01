import styled from "styled-components";


const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const lq=breakpoints.map(
  bp=>`@media screen and (min-width:${bp}px)`
)

export const Divcontainer=styled.div`
background:transparent;
display:grid;
height:100vh;
width:50%;
align-items: center;
justify-content:center;
display:${({open})=>open?"none":"grid"};
`
export const Info=styled.div`
width:306px;
height:xxx;
display:grid;
align-items: center;
justify-content:center;
margin-bottom:10px;
`
export const InfoLabel=styled.label`
position:relative;
top:10px;
font-size:26px;
padding:10px;
margin-bottom:20px;
`

export const Form=styled.form`
width:306px;
border:1px solid rgb(223,228,233);
height:xxx;
display:grid;
align-items: center;
border-radius:5px;
background:rgb(246,248,250);
`
export const Div=styled.div`
position:relative;
display:grid;
width:100%;
display:inline;
justify-content:center;
margin-bottom:10px;
`
export const Input=styled.input`
width:90%;
position:relative;
left:5%;
padding: 10px;
background:FFFFFF;
border:1px solid rgb(208,215,222);
border-radius:5px;
`
export const LoginLabel=styled.label`
width:90%;
position:relative;
top:10px;
left:5%;
font-size:16px;
margin-bottom:20px;
line-height: 30px;
`


export const Button=styled.button`
width:90%;
position:relative;
left:5%;
padding: 10px;
background:rgb(31,136,61);
border:1px solid rgb(208,215,222);
border-radius:5px;
margin-bottom:10px;
color:white;
font-size: 16px;
cursor: pointer;
`
export const Form2=styled.button`
width:306px;
border:1px solid rgb(223,228,233);
height:xxx;
display:grid;
align-items: center;
justify-content:center;
border-radius:5px;
background:rgb(246,248,250);
margin-top:15px;

`
export const Goregister=styled.button`
position:relative;
align-text:center;
top:10px;
font-size:16px;
padding:10px;
color:#02B6B3;
background:none;
margin-bottom:20px;
border:none;
cursor:pointer;
`
export const ForgotPassword=styled.button`
position:absolute;
font-size:14px;
left:53%;
border:none;
background:none;
color:rgb(40,157,240);
`