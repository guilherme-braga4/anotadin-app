import {
  HeaderStyled,
  ContainerStyled,
  HeaderUser,
  Container,
} from "./styles.js";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderUser>
          <h1>Seja bem Vindo</h1>
          <div>
            <a>Usuário Teste</a>
          </div>
        </HeaderUser>
        <HeaderStyled>
          <ContainerStyled>
            <div>
              <img src={logo} alt="logo anotadin"></img>
              <h1>ANOTADIN App</h1>
              <a>Estruturando a sua liberdade financeira!</a>
            </div>
          </ContainerStyled>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default Header;
