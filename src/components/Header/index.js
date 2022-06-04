import React, {useContext, useState} from 'react';
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
import Modal from '@mui/material/Modal';
import ModalEditUser from '../../components/ModalEditUser'


const Header = () => {
  const { data, rendimentos, setRendimentos } = useContext(AuthContext)
  // console.log("data Header", data)
  const navigate = useNavigate()
  const userName = localStorage.getItem("@AnotadinApp User_Nome")
  // console.log("rendimentos", rendimentos)
  const [openModalUserEdit, setOpenModalUserEdit] = useState(false);
  
  if (rendimentos == false) {
  return (
    <>
      <Container>
        <Modal
          open={openModalUserEdit}
        >
          <ModalEditUser setOpenModalUserEdit={setOpenModalUserEdit}/>
        </Modal>
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
              <ButtonFilled onClick={() => 
                 {setRendimentos(true)
                 navigate('/rendimentos')}}>Rendimentos</ButtonFilled>
              <ButtonFilled onClick={() => setOpenModalUserEdit(true)}>Perfil</ButtonFilled>
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
}
else {
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
              <ButtonFilled onClick={() => 
                 {setRendimentos(false)
                 navigate('/dashboard')}}>Dashboard</ButtonFilled>
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
}
};

export default Header;
