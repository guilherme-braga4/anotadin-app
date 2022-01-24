import { HeaderStyled, ContainerStyled, HeaderUser } from "./styles.js";

const Header = () => {
  return (
    <>
      <HeaderUser>
        <h1>Seja bem Vindo</h1>
        <div>
          <a>Usuário Teste</a>
        </div>
      </HeaderUser>
      <HeaderStyled>
        <ContainerStyled>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.QxfgNYlRzPQso9yFvHksGgHaHa?pid=ImgDet&rs=1"
              alt="logo anotadin"
            ></img>
          </div>
          <h1>Anotadin App</h1>
        </ContainerStyled>
      </HeaderStyled>
    </>
  );
};

export default Header;
