import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from 'react';


const Main=styled.main`
display:grid;
height:100vh;
align-items: center;
justify-content:center;
`
export default function Layouts({children}){
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

    return(
        <>
        <Head>
            <title>
                Rahacode.com
            </title>
        </Head>
        <>
      {children}
        </>
        </>
    )
}