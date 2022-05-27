import React from 'react';
import HeaderNav from '../../components/HeaderNav/index'
import { ButtonFeaturesNoBackground } from '../../components/Buttons/styles'
import { Container, ContainerInfos, ContainerText, ContainerImage, ContainerLogos, ContainerSlider } from './styled'
import bitcoinIcon from '../../images/bitcoin_home.png'
import logocripto1 from '../../images/logocripto-1.png'
import logocripto2 from '../../images/logocripto-2.png'
import logocripto3 from '../../images/logocripto-3.png'
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  return ( 
    <Container>
      <HeaderNav/>
      <ContainerInfos>
        <ContainerText>
          <span>agilidade, organização e flow. 💰 </span>
          <h1>Controle suas criptomoedas com ainda mais liberdade!</h1>
          <p>Quem compra criptomoedas, compra também liberdade. A Anotadin nasceu com o próprosito de organizar suas criptos:</p>
          <section>
            <AiFillStar size={30} color={'#eb1484'}/>
            <a>acompanhe seus ganhos</a>
          </section>
          <section>
            <AiFillStar size={30} color={'#eb1484'}/>
            <a>acesse projeções de resultados</a>
          </section>
          <section>
            <AiFillStar size={30} color={'#eb1484'}/>
            <a>saiba o que está dentro da sua carteira</a>
          </section>
          <ContainerLogos>
            <img src={logocripto1}/>
            <img src={logocripto2}/>
            <img src={logocripto3}/>
          </ContainerLogos>
        </ContainerText>
        <div>
          <ContainerImage>
            <img src={bitcoinIcon}/>
          </ContainerImage>
          {/* <ContainerSlider>
            <h1>aaaaaaa</h1>
          </ContainerSlider> */}
        </div>
      </ContainerInfos>
    </Container>
   );
}
 
export default Home;