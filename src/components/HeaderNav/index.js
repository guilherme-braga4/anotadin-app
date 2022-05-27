import {
  HeaderStyled,
  ContainerStyled,
  HeaderUser,
  Container,
  ContainerButton,
} from "./styles.js";
import { ButtonNoBackground, ButtonFilled } from '../Buttons/styles'
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <HeaderStyled>
          <ContainerStyled>
            <div>
              <img src={logo} alt="logo anotadin"></img>
              <h1>Anotadin</h1>
              <a>Estruturando a sua liberdade financeira!</a>
            </div>
            <ContainerButton>
              <ButtonFilled onClick={() => {navigate("/login", { replace: true })}}>Login</ButtonFilled>
              <ButtonNoBackground onClick={() => {navigate("/login", { replace: true })}}>Cadastre-se</ButtonNoBackground>
            </ContainerButton>
          </ContainerStyled>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default HeaderNav;
