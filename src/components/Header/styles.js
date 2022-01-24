import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 10px auto;
  display: flex;
  align-items: center;

  h1 {
  }

  button {
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10px;

  div {
    margin: 0;
  }

  h1 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 30px;
    padding: 0 20px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 70px;
  }
`;

export const HeaderUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    margin: 10px;
  }

  h1 {
    font-family: Poppins;
    font-weight: 300;
  }

  a {
    font-family: Poppins;
  }
`;
