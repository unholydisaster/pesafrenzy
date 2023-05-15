import Head from "next/head";
import React from "react";
import styled from "styled-components";

const Main=styled.main`
display:grid;
height:100vh;
align-items: center;
justify-content:center;

`
export default function Layouts({children}){

    return(
        <>
        <Head>
            <title>
                Rahacode.com
            </title>
        </Head>
        <Main>
        {children}
        </Main>
        </>
    )
}