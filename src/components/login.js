import { Button, Div, Divcontainer, ForgotPassword, Form, Form2, Goregister, Info, InfoLabel, Input, LoginLabel } from "@/styles/Login";
import React, { useState } from "react";
import { useRouter } from 'next/router';

function LoginForm({open}) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleClick = (e) => {
      e.preventDefault();
      router.push('/register');
    };

  return (
    <>
    <Divcontainer open={open}>
    <Info>
        <InfoLabel>
        Sign in to Pesafrenzy
        </InfoLabel>
    </Info>    
    <Form>
        <LoginLabel>Username or email address</LoginLabel>
        <Div>
            <Input type="email" />
        </Div>
            <LoginLabel>Password</LoginLabel>
            <ForgotPassword>Forgot password?</ForgotPassword>
        <Div>
            <Input type="password" />
        </Div>
        <Button type="submit">Sign In</Button>
    </Form>
    <Form2>
        <Goregister onClick={handleClick} >
         New to Pesafrenzy? Click here to create an account.
        </Goregister>
    </Form2>
    </Divcontainer>


    </>
  );
}


export default LoginForm;

