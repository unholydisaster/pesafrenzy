import styled from "styled-components";


export const Divcontainerregister=styled.div`
background:transparent;
display:${({open1})=>open1?"none":"grid"};
`

export const Inforegister=styled.div`
width:306px;
height:xxx;
display:grid;
align-items: center;
justify-content:center;
margin-bottom:10px;
`
export const InfoLabelregister=styled.label`
position:relative;
top:10px;
font-size:26px;
padding:10px;
margin-bottom:20px;
`

export const Formregister = styled.form`
  display: grid;
  background:rgb(246,248,250);
  border:1px solid rgb(223,228,233);
  border-radius:5px;
  align-items: center;
  margin-top: 20px;
  width:306px;
  padding:10px;
`;


export const Inputregister = styled.input`
  padding: 10px;
  width:90%;
  margin: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Labelregister=styled.label`
width:90%;
position:relative;
top:10px;
left:5%;
font-size:16px;
margin-bottom:5px;
line-height: 30px;
`
export const Buttonregister = styled.button`
  padding: 10px;
  margin-top: 20px;
  width:90%;
  margin:10px;
  margin-bottom:20px;
  border: none;
  border-radius: 5px;
  background:rgb(31,136,61);
  border:1px solid rgb(208,215,222);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Form2register=styled.div`
width:306px;
border:1px solid rgb(223,228,233);
height:xxx;
display:grid;
align-items: center;
justify-content:center;
border-radius:5px;
background:rgb(246,248,250);
margin-top:15px;
margin-bottom:10px;
`
export const Label2register=styled.button`
display:grid;
align-text:center;
position:relative;
top:10px;
font-size:16px;
padding:10px;
color:#02B6B3;
margin-bottom:20px;
border:none;
background:none;
cursor:pointer;
`