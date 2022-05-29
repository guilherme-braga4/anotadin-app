import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`

export const ContainerDisplayModal = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  // background-color: pink;
  padding-bottom: 3rem;
  margin-top: 5rem;
`

export const ContainerForm  = styled.div`
  background-image: linear-gradient(#2a2d3a, #24252d);
  border: 1px solid #eb1484;
  border-radius: 10px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 2rem;
    padding: 0 0px;
    color: #eb1484;
    margin-top: 2rem;
  }

  p {
    color: white;
    padding: 10px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    // background-color: green;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    
  }

  input {
    background-color: #1b1a21;
    font-family: Poppins;
    border-radius: 10px;
    border: none;
    height: 50px;
    font-size: 20px;
    color: white;
    padding: 20px;
    max-width: 50%;
  }

  input::placeholder {
   color: white;
   font-size: 14px;
  }

  label {
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  // background-color: green;
  margin: 2rem;
  width: 100%;

  div {
    // background-color: red;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
`
