import Layouts from "@/layout/Layout.js";
import { GlobalStyle} from "../styles/Globals.js";
import React from "react"
import styled from 'styled-components';

export default function App({Component,pageProps}){
  return (
    <>
      <GlobalStyle/>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>  
    </>
  )
}

