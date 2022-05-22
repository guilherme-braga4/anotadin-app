import React from 'react';
import Header from '../../components/Header/index'
import { Container, ContainerForm, ContainerImage, ContainerFormInputButton, ContainerButton } from './styled'
import { ButtonFilled, ButtonNoBackground } from '../../components/Buttons/styles';
import logo from "../../images/logo.png";
import logocripto from "../../images/cripto.png";


const Login = () => {
  return ( 
    <Container>
      <ContainerForm>
        <ContainerFormInputButton>
          <form>
          <h1>Anotadin</h1>
          <img src={logo} size={20}/>
            <div>
              <label>Email</label>
              <input placeholder="Email"/>
            </div>
            <div>
              <label>Senha</label>
              <input placeholder="Senha"/>
            </div>
            <ContainerButton>
              <div>
                <ButtonFilled>Login</ButtonFilled>
                <ButtonNoBackground>Cadastre-se</ButtonNoBackground>
              </div>
            </ContainerButton>
          </form>
        </ContainerFormInputButton>
      </ContainerForm>
      <ContainerImage>
        <p>Controle suas criptomoedas, com ainda mais liberdade!</p>
        <img src={logocripto}/>
      </ContainerImage>
    </Container>
   );
}
 
export default Login;