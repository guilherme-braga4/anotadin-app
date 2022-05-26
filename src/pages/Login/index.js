import React, {useState} from 'react';
import Header from '../../components/Header/index'
import { Container, ContainerForm, ContainerImage, ContainerFormInputButton, ContainerButton } from './styled'
import { ButtonFilled, ButtonNoBackground } from '../../components/Buttons/styles';
import logo from "../../images/logo.png";
import logocripto from "../../images/cripto.png";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api'

const Login = () => {
  const [data, setData] = useState({})

 async function handleSubmit (values) {
   try {
   const {data: response} = await api.post('/home', values)
    if (response) {
      //res -> 
      setData(response)
      console.log("response", response)
      console.log("data state", data)
    }
  }
  catch (err) {
    console.log("Algo deu errado ao efetuar o Login")
  }
 }

  return ( 
    <Container>
      <ContainerForm>
        <ContainerFormInputButton>
          <Formik
            initialValues={{
              email: '',
              senha: ''
            }}
            // validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
            >
            <Form>
          <h1>Anotadin</h1>
          <img src={logo} size={20}/>
            <div>
              <label>Email</label>
              <Field placeholder="Email" name="email" type="email"/>
            </div>
            <div>
              <label>Senha</label>
              <Field placeholder="Senha" name="senha" type="password"/>
            </div>
            <ContainerButton>
              <div>
                <ButtonFilled>Login</ButtonFilled>
                <ButtonNoBackground>Cadastre-se</ButtonNoBackground>
              </div>
            </ContainerButton>
            </Form>
          </Formik>
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