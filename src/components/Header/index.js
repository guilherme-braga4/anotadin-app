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
import { useNavigate } from "react-router-dom";



const Header = () => {
  const { data } = useContext(AuthContext)
  console.log("data Header", data)
  const navigate = useNavigate()
  const userName = localStorage.getItem("@AnotadinApp User_Nome")
  

  return (
    <>
      <Container>
        <HeaderUser>
          <h1>Seja bem Vindo</h1>
          <a>{userName}</a>
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
              <ButtonNoBackground onClick={() => {
                navigate("/login", { replace: true }) 
                localStorage.removeItem("@AnotadinApp Auth")
                localStorage.removeItem("@AnotadinApp JWT")
                window.location.reload();
                }}>Sair</ButtonNoBackground>
            </ContainerButton>
          </ContainerStyled>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default Header;
