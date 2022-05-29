import React, {useContext} from 'react';
import {
  HeaderStyled,
  ContainerStyled,
  HeaderUser,
  Container,
  ContainerButton
} from "./styles.js";
import { ButtonNoBackground, ButtonFilled } from '../Buttons/styles'
import logo from "../../images/logo.png";
import { AuthContext } from '../../contexts/AuthContext'


const Header = () => {
  const { data, setAuth } = useContext(AuthContext)
  console.log("data Header", data)

  return (
    <>
      <Container>
        <HeaderUser>
          <h1>Seja bem Vindo</h1>
          <a>{data.user.nome}</a>
        </HeaderUser>
        <HeaderStyled>
          <ContainerStyled>
            <div>
              <img src={logo} alt="logo anotadin"></img>
              <h1>Anotadin</h1>
              <a>Estruturando a sua liberdade financeira!</a>
            </div>
            <ContainerButton>
              <ButtonFilled>Rendimentos</ButtonFilled>
              <ButtonFilled>Perfil</ButtonFilled>
              <ButtonNoBackground onClick={() => {setAuth(false)}}>Sair</ButtonNoBackground>
            </ContainerButton>
          </ContainerStyled>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default Header;
