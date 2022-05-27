import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  // background-color: #24252d;
  background-image: linear-gradient(101.12deg,#eb1484 27.35%,#c91cc3 99.99%,#c81cc5 100%,#c81cc5 0);
  overflow: auto;
`

export const ContainerInfos = styled.div`
  // background-color: #24252d;
  background-color: #white;
  display: flex;
  padding: 3rem 2rem;
  
`
export const ContainerText = styled.div`
  flex: 1 1 0%;
  max-width: 60rem;
  // background-image: linear-gradient(101.12deg,#eb1484 27.35%,#c91cc3 99.99%,#c81cc5 100%,#c81cc5 0);
  // background-color: #24252d;
  background-image: linear-gradient(#2a2d3a, #24252d);
  padding: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    margin-bottom: 2rem;
    color: white;
    font-weight: bold;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 4rem;
    letter-spacing: -0.03em;
    margin-bottom: 3rem;
    color: #eb1484;
     background-image: linear-gradient(
       -225deg,
       #eb1484 0%,
       #c91cc3 29%,
       #231557 100%
      //  #2a2d3a 100%
     );
     background-size: auto auto;
     background-clip: border-box;
     background-size: 200% auto;
     color: #fff;
     background-clip: text;
     text-fill-color: transparent;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     animation: textclip 3s linear infinite;
     display: inline-block;
         font-size: 2.813rem;
   }
   
   @keyframes textclip {
     to {
       background-position: 200% center;
     }
  }

  p {
    font-size: 1.25rem;
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: white;
  }

  a {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
    font-weight: bold;
    margin-left: 0.5rem;
    margin-top: 10px;
  }

  section {
    display: flex;
    align-items: center;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  flex: 1 1 0%;
  -moz-box-pack: end;
  justify-content: flex-end;
  align-items: flex-start;
  // background-color: red;

  img {
    // background-color: gray;
    max-width: 55rem;
  }

`

export const ContainerLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-around;
  // background-image: linear-gradient(101.12deg,#eb1484 27.35%,#c91cc3 99.99%,#c81cc5 100%,#c81cc5 0);
  border-radius: 30px;

  img {
    // background-color: red;
    max-width: 18.75rem;
  }
`
export const ContainerSlider = styled.div`
  background-color: #2a2d3a;
  margin-left: 40px;
  height: 100px;
  color: white;
  border-radius: 30px;
  padding: 1rem;
`

