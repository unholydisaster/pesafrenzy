import { GlobalStyle} from "../styles/Globals.js";
import React from "react"


export default function App({Component,pageProps}){
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />  
    </>
  )
}

