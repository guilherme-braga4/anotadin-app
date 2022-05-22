import {
  HeaderStyled,
  ContainerStyled,
  HeaderUser,
  Container,
} from "./styles.js";

import { ButtonNoBackground, ButtonFilled } from '../Buttons/styles'

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderUser>
          <h1>Seja bem Vindo</h1>
          <a>Usuário Teste</a>
        </HeaderUser>
        <HeaderStyled>
          <ContainerStyled>
            <div>
              <img src={logo} alt="logo anotadin"></img>
              <h1>Anotadin</h1>
              <a>Estruturando a sua liberdade financeira!</a>
            </div>
            <div>
              <ButtonFilled>Login</ButtonFilled>
              <ButtonNoBackground>Cadastre-se</ButtonNoBackground>
            </div>
          </ContainerStyled>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default Header;
