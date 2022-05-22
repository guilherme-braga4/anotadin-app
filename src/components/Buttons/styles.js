import styled from 'styled-components'

export const ButtonNoBackground = styled.button`
{
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-color: #eb1484;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  margin: 30px 40px 0px 40px;
  font-weight: bold;
  font-size: 16px;
}

 :hover {
  background-color: #eb1484;
  color: white;
  cursor: pointer;
}
`

export const ButtonFilled = styled.button`
{
  background-image: linear-gradient(101.12deg,#eb1484 27.35%,#c91cc3 99.99%,#c81cc5 100%,#c81cc5 0);
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  margin: 30px 40px 0px 40px;
  font-weight: bold;
  border: none;

}

 :hover {
  opacity: 0.8;
}
`

export const ButtonAdd = styled.button`
{
  background-image: linear-gradient(101.12deg,#eb1484 27.35%,#c91cc3 99.99%,#c81cc5 100%,#c81cc5 0);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  min-width: 250px;
  width: 250px;
  height: 45px;
  margin: 30px 40px 0px 40px;
}

 :hover {
  opacity: 0.8;
}
`