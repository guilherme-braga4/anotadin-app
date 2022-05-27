import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(101.12deg, #eb1484 27.35%, #c91cc3 99.99%, #c81cc5 100%, #c81cc5 0);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  // width: auto;
  // border: 1px solid #eb1484;
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
    width: 20%;
    `
