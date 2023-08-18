import { Buttonregister, Divcontainerregister, Formregister, Form2register, Inforegister, InfoLabelregister, Inputregister, Labelregister, Label2register} from "@/styles/Register";
import { useState } from "react";
import { useRouter } from 'next/router';

function Registration({open1}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, confrimPassword] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };



  return (
    <>
    <Divcontainerregister open1={open1}>
    <Inforegister>
        <InfoLabelregister>Welcome to Pesafrenzy! Let begin the adventure</InfoLabelregister>
    </Inforegister>
      <Formregister onSubmit={handleSubmit}>
        <Labelregister>Enter your email</Labelregister>
        <Inputregister
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Labelregister>Enter a username</Labelregister>
        <Inputregister
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Labelregister>Enter phone number</Labelregister>
        <Inputregister
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Labelregister>Create a password</Labelregister>
        <Inputregister
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Labelregister>Confirm password</Labelregister>
        <Inputregister
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => confrimPassword(e.target.value)}
          required
        />
        <Buttonregister type="submit">Register</Buttonregister>
      </Formregister>
      <Form2register>
        <Label2register onClick={handleClick}>
         Already registered to Pesafrenzy? Click here to Sign In.
        </Label2register>
      </Form2register>
      </Divcontainerregister>
      </>
  );
}

export default Registration;
