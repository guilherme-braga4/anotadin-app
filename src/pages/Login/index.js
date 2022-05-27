import React, {useState, useContext} from 'react';
// import { AuthContext } from '../../contexts/AuthContext'
import Header from '../../components/Header/index'
import { Container, ContainerForm, ContainerImage, ContainerFormInputButton, ContainerButton } from './styled'
import { ButtonFilled, ButtonNoBackground } from '../../components/Buttons/styles';
import logo from "../../images/logo.png";
import logocripto from "../../images/cripto.png";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import api from '../../services/api'
import '../../../src/index.css'

const Login = () => {
  const [data, setData] = useState({})
  const [cadastro, setCadastro] = useState(false)
  // const { auth, setAuth } = useContext(AuthContext)

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

 async function handleSignIn (values) {
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

 console.log("cadastro", cadastro)

 const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido, digite novamente').required('Campo obrigatório!'),
  senha: Yup.string()
    .min(6, 'A senha precisa incluir pelo menos 6 digitos')
    .max(14, 'A senha não pode ter mais de 14 caracteres')
    .required('Campo obrigatório!'),
});

  //phoneRegExp -phone validate expression
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const SignupSchema = Yup.object().shape({
  telefone: Yup.string()
    .matches(phoneRegExp, 'Formato Inválido - Tente: (99)123456789')
    .required('Campo obrigatório!'),
  email: Yup.string().email('Email inválido, digite novamente').required('Campo obrigatório!'),
  senha: Yup.string()
    .min(6, 'A senha precisa incluir pelo menos 6 digitos')
    .max(14, 'A senha não pode ter mais de 14 caracteres')
    .required('Campo obrigatório!'),
  confirmarSenha: Yup.string()
    .min(6, 'A senha precisa incluir pelo menos 6 digitos')
    .max(14, 'A senha não pode ter mais de 14 caracteres')
    .required('Campo obrigatório!')
    .oneOf([Yup.ref('senha')],'As senhas são iguais')
});
  
 if (cadastro == false) {
 return ( 
    <Container>
      <ContainerForm>
        <ContainerFormInputButton>
          <Formik
            initialValues={{
              email: '',
              senha: ''
            }}
            validationSchema={SigninSchema}
            onSubmit={(values) => handleSubmit(values)}
            >
            {({ errors, touched }) => (
            <Form>
              <h1>Anotadin</h1>
              <img src={logo} size={20}/>
              <p>Complete os campos para efetuar o seu login!</p>
                <div>
                  <label>Email</label>
                  <Field placeholder="email@email.com" name="email" type="email"/>
                  {errors.email && touched.email ? <div className="yup-container">{errors.email}</div> : null}
                </div>
                <div>
                  <label>Senha</label>
                  <Field placeholder="Senha" name="senha" type="password"/>
                  {errors.senha && touched.senha ? <div className="yup-container">{errors.senha}</div> : null}
                </div>
                <ContainerButton>
                  <div>
                    <ButtonFilled type="submit">Login</ButtonFilled>
                    <ButtonNoBackground type="submit" onClick={() => setCadastro(true)}>Cadastre-se</ButtonNoBackground>
                  </div>
                </ContainerButton>
              </Form>
            )}
          </Formik>
        </ContainerFormInputButton>
      </ContainerForm>
      <ContainerImage>
        <p>Controle suas criptomoedas, com ainda mais liberdade!</p>
        <img src={logocripto}/>
      </ContainerImage>
    </Container> 
   ) 
  }
  else { 
    return ( 
      <Container>
        <ContainerForm>
          <ContainerFormInputButton>
            <Formik
              initialValues={{
                nome: '',
                telefone: '',
                email: '',
                senha: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => handleSignIn(values)}
              >
              {({ errors, touched }) => (
                <Form>
                  <img src={logo} size={20}/>
                  <p>Complete os campos para efetuar o seu cadastro!</p>
                  <div>
                    <label>Nome</label>
                    <Field placeholder="Nome" name="nome" type="name"/>
                  </div>
                  <div>
                    <label>Telefone</label>
                    <Field placeholder="(99)12345789" name="telefone" type="phone"/>
                    {errors.telefone && touched.telefone ? <div className="yup-container">{errors.telefone}</div> : null}
                  </div>
                  <div>
                    <label>Email</label>
                    <Field placeholder="email@email.com" name="email" type="email" />
                    {errors.email && touched.email ? <div className="yup-container">{errors.email}</div> : null}
                    <div>
                  </div>
                    <label>Senha</label>
                    <Field placeholder="Senha" name="senha" type="password"/>
                    {errors.senha && touched.senha ? <div className="yup-container">{errors.senha}</div> : null}
                  </div>
                  <div>
                    <label>Confirme a Senha</label>
                    <Field placeholder="Senha" name="confirmarSenha" type="password"/>
                    {errors.confirmarSenha && touched.confirmarSenha ? <div className="yup-container">{errors.confirmarSenha}</div> : null}
                  </div>
                  <ContainerButton>
                    <div>
                      <ButtonNoBackground type="submit" onClick={() => setCadastro(false)}>Fazer Login?</ButtonNoBackground>
                      <ButtonFilled type="submit">Cadastrar</ButtonFilled>
                    </div>
                  </ContainerButton>
                </Form>
              )}
            </Formik>
          </ContainerFormInputButton>
        </ContainerForm>
        <ContainerImage>
          <p>Controle suas criptomoedas, com ainda mais liberdade!</p>
          <img src={logocripto}/>
        </ContainerImage>
      </Container> 
     ) 
  }
}
 
export default Login;