import styled from "styled-components";

export const Container = styled.div`
  background-color: #eb1484;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  // width: auto;
  border: 1px solid #eb1484;
`;

export const HeaderUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30px;
  padding: 3px 0px 10px 0px;


  h1 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
  }

  a {
    font-family: Poppins;
    color: #fff;
    font-size: 12px;
    margin: 2px 10px
  }
`;

export const HeaderStyled = styled.header`
  margin: 0px auto;
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    color: #fff;
  }

  button {
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #24252d;

  div {
    display: flex;
    margin: 0;
    align-items: center;
  }

  a {
    font-family: Poppins;
    font-weight: italic;
    font-size: 20px;
    padding: 0 20px;
    color: #fff;
  }

  h1 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 50px;
    padding: 0 0px;
    color: #fff;
  }

  img {
    padding: 0 -20px;
    width: 100px;
    height: 100px;
  }

`;

export const ContainerButton = styled.div`
    // background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    `
