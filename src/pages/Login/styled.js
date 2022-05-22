import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
  display:flex;
  align-items: center;
  justify-content: center;
  flex: 2

`

export const ContainerImage = styled.div`
  background-image: linear-gradient(89.97deg, #eb1484 1.84%, #c81cc5 102.67%);
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // div {
  //   height: 100%;
  //   width: 100%;
  //   background-color: red;
  //   flex: 1 1 auto
  // }

  p {
    color: white;
    font-size: 26px;
    font-weight: bold;
  }

  img {
    transform: rotate(-15deg);
    position:relative;

    // CÓDIGO PARA CHAMAR A ANIMAÇÃO 
    -webkit-animation: rodaroda 7s linear alternate 3;
    -moz-animation: rodaroda 7.0s linear infinite;
    -ms-animation: rodaroda 7.0s linear infinite;
    -o-animation: rodaroda 7.0s linear infinite;
    animation: rodaroda 7.0s linear infinite;
  }
  
  // KEY FRAMES PARA FAZER OS GIROS 
  @-webkit-keyframes rodaroda {
    0% { -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); -ms-transform:rotate(0deg); -o-transform:rotate(0deg); transform:rotate(0deg); }
    50% { -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); -o-transform:rotate(180deg); transform:rotate(180deg); }
    100% { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -ms-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); }
  }
  @-moz-keyframes rodaroda {
    0% { -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); -ms-transform:rotate(0deg); -o-transform:rotate(0deg); transform:rotate(0deg); }
    50% { -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); -o-transform:rotate(180deg); transform:rotate(180deg); }
    100% { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -ms-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); }
  }
  @-ms-keyframes rodaroda {
    0% { -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); -ms-transform:rotate(0deg); -o-transform:rotate(0deg); transform:rotate(0deg); }
    50% { -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); -o-transform:rotate(180deg); transform:rotate(180deg); }
    100% { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -ms-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); }
  }
  @-o-keyframes rodaroda {
    0% { -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); -ms-transform:rotate(0deg); -o-transform:rotate(0deg); transform:rotate(0deg); }
    50% { -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); -o-transform:rotate(180deg); transform:rotate(180deg); }
    100% { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -ms-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); }
  }
  @keyframes rodaroda {
    0% { -webkit-transform:rotate(0deg); -moz-transform:rotate(0deg); -ms-transform:rotate(0deg); -o-transform:rotate(0deg); transform:rotate(0deg); }
    50% { -webkit-transform:rotate(180deg); -moz-transform:rotate(180deg); -ms-transform:rotate(180deg); -o-transform:rotate(180deg); transform:rotate(180deg); }
    100% { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -ms-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); }
  }
  }
`

export const ContainerForm  = styled.div`
  background-color: #24252d;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerFormInputButton  = styled.div`
  background-image: linear-gradient(#2a2d3a, #24252d);
  border: 1px solid #eb1484;
  border-radius: 10px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  padding: 2rem;

  form {
    // background-color: white;
    flex: 3;
    display: flex;
    align-items: center;
    flex-direction: column;
    
  }

  h1 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 50px;
    padding: 0 0px;
    color: #eb1484;
  }

  img {
    padding: 0 -20px;
    width: 100px;
    height: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    // background-color: pink;
    width: 100%;
  }

  input {
    background-color: #1b1a21;
    font-family: Poppins;
    border-radius: 10px;
    border: none;
    height: 50px;
    font-size: 20px;
    color: white;
    padding: 20px;
  }

  input::placeholder {
   color: white;
   font-size: 14px;
  }


  label {
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  // background-color: green;
  margin: 10px;
  width: 100%;

  div {
    // background-color: red;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`
