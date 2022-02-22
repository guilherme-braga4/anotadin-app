import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 1120px;
  padding: 10px 5px 100px;
  // background-color: #aaa;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  width: 100vw;
  // margin: 10px 0px;
  // background-color: blue;
  padding: 20px 20px;

  label {
    font-family: poppins;
    font-size: 24px;
    font-weight: italic;
    color: #000;
    margin: 0px 10px 0px 0px;
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
    height: 100px;
    margin: 30px 40px 0px 40px;
  }

  input {
    background-color: #fff;
    font-family: Poppins;
    // border: none;
    border-radius: 5px;
    box-shadow: ;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
`;

export const ContainerViewAsset = styled.div`
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 1000px;
  margin: 10px auto;
  // background-color: yellow;
  padding: 20px 50px;

  div {
    font-family: Poppins;
    font-size: 20px;
  }
`;
