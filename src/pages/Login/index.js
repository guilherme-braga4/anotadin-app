import React, {useState, useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/AuthContext'
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
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate()

  const [cadastro, setCadastro] = useState(false)
  const { data, setData } = useContext(AuthContext)

 async function handleSubmit (values) {
   console.log("handleSubmit")
   try {
   const {data: response} = await api.post('/login', values)
    if (response) {
      //res -> 
     console.log("response", response)
     toast.success("Login Realizado com Sucesso!");
     setData(response)
     localStorage.setItem("@AnotadinApp Auth", true);
     localStorage.setItem("@AnotadinApp JWT", response.token.token);
     localStorage.setItem("@AnotadinApp User_Id", response.user.id);
     localStorage.setItem("@AnotadinApp User_Nome", response.user.nome);
     localStorage.setItem("@AnotadinApp User_Email", response.user.email);

     <Navigate to="/dashboard" replace={true} />
     navigate("/dashboard", { replace: true })
     window.location.reload();
     console.log("data state", data)
    }
  }
  catch (err) {
    toast.error("Algo deu errado ao efetuar o Login")
  }
 }

 async function handleSignIn (values) {
  console.log("handleSignIn")
  try {
    const user = {
      nome: values.nome,
      telefone: values.telefone,
      email: values.email,
      password: values.password  
    }
  const {data: response} = await api.post('/user/', user)
   if (response) {
     //res -> 
     toast.success("Cadastro Realizado com Sucesso!");
     setData(response)
     console.log("data state", data)
   }
 }
 catch (err) {
  toast.error("Algo deu errado ao efetuar o Login")
 }
}

 console.log("cadastro", cadastro)

 const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido, digite novamente').required('Campo obrigatório!'),
  password: Yup.string().required('Campo obrigatório!')
});

  //phoneRegExp -phone validate expression
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const SignupSchema = Yup.object().shape({
  telefone: Yup.string()
    .matches(phoneRegExp, 'Formato Inválido - Tente: (99)123456789')
    .required('Campo obrigatório!'),
  email: Yup.string().email('Email inválido, digite novamente').required('Campo obrigatório!'),
  password: Yup.string()
    .min(6, 'A senha precisa incluir pelo menos 6 digitos')
    .max(14, 'A senha não pode ter mais de 14 caracteres')
    .required('Campo obrigatório!'),
  confirmPassword: Yup.string()
    .min(6, 'A senha precisa incluir pelo menos 6 digitos')
    .max(14, 'A senha não pode ter mais de 14 caracteres')
    .required('Campo obrigatório!')
    .oneOf([Yup.ref('password')],'As senhas não são iguais')
});
  
 if (cadastro == false) {
 return ( 
    <Container>
      <ContainerForm>
        <ContainerFormInputButton>
          <Formik
            initialValues={{
              email: '',
              password: ''
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
                  <Field placeholder="Senha" name="password" type="password"/>
                  {errors.password && touched.password ? <div className="yup-container">{errors.password}</div> : null}
                </div>
                <ContainerButton>
                  <div>
                    <ButtonFilled type="submit" >Login</ButtonFilled>
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
                password: '',
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
                    <Field placeholder="Senha" name="password" type="password"/>
                    {errors.password && touched.password ? <div className="yup-container">{errors.password}</div> : null}
                  </div>
                  <div>
                    <label>Confirme a Senha</label>
                    <Field placeholder="Senha" name="confirmPassword" type="password"/>
                    {errors.confirmPassword && touched.confirmPassword ? <div className="yup-container">{errors.confirmPassword}</div> : null}
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