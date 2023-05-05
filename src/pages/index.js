import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:70vw;
  top:10vh;
  position:relative;
  left:15vw;
  justify-content:center;
  align-items:center;
  border: 1px solid black;
  p{
    color:red;
    margin:10px;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  border: none;
  width:90%;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
  padding: 12px 16px;
`;

const ConfirmButton = styled.button`
  background-color: #e60000;
  border: none;
  width:90%;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
  padding: 12px 16px;
`;

const amounts = [10, 20, 30, 50, 100, 250, 1000];

const VerticalButtons = ({ phoneNumber, setPhoneNumber }) => {
  const [amountToPay, setAmountToPay] = useState(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleButtonClick = (amount) => {
    setAmountToPay(amount);
    setIsConfirming(true);
  };

  const handleConfirmClick = async () => {
    try {
      const response = await axios.post(`${process.env.BASE_URL}/api/mpesa`, { amount: amountToPay, phoneNumber });
      console.log(response.data);
      setIsConfirming(false);
      setAmountToPay(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setIsConfirming(false);
    setAmountToPay(null);
  };

  return (
    <ButtonContainer>
      {amounts.map((amount) => (
        <Button key={amount} onClick={() => handleButtonClick(amount)}>Pay {amount}</Button>
      ))}
      {isConfirming && (
        <>
          <p>Are you sure you want to pay {amountToPay}?</p>
          <ConfirmButton onClick={handleConfirmClick}>Yes</ConfirmButton>
          <Button onClick={handleCancelClick}>No</Button>
        </>
      )}
    </ButtonContainer>
  );
};

const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState('0718832297');

  return (
    <>
      <Head>
        <title>pesafrenzy</title>
        <meta name="description" content="Generated by pesafrenzy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VerticalButtons phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      </main>
    </>
  );
};

export default HomePage;
