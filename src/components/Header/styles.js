import styled from "styled-components";

export const Container = styled.div`
  background-color: #442c61;
  padding: 0px 10px 10px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const HeaderUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30px;
  padding: 3px 0px 10px 0px;

  div {
    margin: 10px;
  }

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
  }
`;

export const HeaderStyled = styled.header`
  margin: 0px auto;
  display: flex;
  align-items: center;
  box-shadow: 10px 5px 5px black;

  h1 {
    color: #fff;
  }

  button {
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: #9c44dc;

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
    font-size: 30px;
    padding: 0 0px;
    color: #fff;
  }

  img {
    padding: 0 -20px;
    width: 100px;
    height: 100px;
  }
`;
