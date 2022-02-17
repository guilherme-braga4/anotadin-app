import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 1120px;
  padding: 10px 5px 100px;
  background-color: #aaa;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  width: 100vw;
  margin: 10px 0px;
  // background-color: blue;
  padding: 20px 20px;

  h1 {
  }

  button {
    background-color: rgb(255, 99, 71);
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-family: Poppins;
    border: none;
    border-radius: 5px;
    width: 50%;
    height: 100%;
    margin: 0px 0px 0px 40px;
  }

  input {
    background-color: #fff;
    font-family: Poppins;
    border: none;
    border-radius: 5px;
    box-shadow: ;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
`;
