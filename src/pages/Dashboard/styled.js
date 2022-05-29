import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
`

export const ContainerDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px 100px;
  background-color: #24252d;
  height: 100%;
  overflow: auto;

  form {
    // background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // width: 80%;
    // height: 100%;
    margin: auto;
  }
`;

export const ContainerInputButton = styled.div`
  display: flex;
  width: 100%;
  // background-color: blue;
  padding: 50px;
  justify-content: center;
  

  header {
    // background-color: red;
    border: 1px solid #eb1484;
    border-radius: 10px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 200px;

    // background-color: red;
  }
  
`;

export const InputButtonBorderLine = styled.div`
  // background-color: green;
`

export const ContainerInputs = styled.div`
  // background-color: green;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  width: auto;
  height: 100%;
  

  div {
    display: flex;
    flex-direction: column;
    // background-color: pink;
    height: 100px;
    margin-left: 50px;
    margin-right: 80px;
  }

  input {
    background-color: transparent;
    font-family: Poppins;
    border-color: #eb1484;
    border-radius: 10px;
    width: 250px;
    height: 50px;
    font-size: 20px;
    color: white;
    padding: 20px;
  }

  input::placeholder {
   color: white;
   font-size: 14px;
  }


  label {
    font-family: poppins;
    font-size: 24px;
    font-weight: bold;
    color: #eb1484;
    margin: 0px 10px 0px 0px;
  }
`

export const ContainerViewAsset = styled.div`
  justify-content: space-around;
  align-items: center;
  width: 1800px;
  height: 1500px;
  margin: 1rem auto;
  background-color: #1b1a21;
  border-radius: 30px;

  div {
    font-family: Poppins;
    font-size: 20px;
    color: white;
    border: none;

    // background-color: yellow;
  }
`;
