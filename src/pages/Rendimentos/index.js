import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext'
import { 
  Container, 
  ContainerDashboard, 
  ContainerInputButton, 
  ContainerInputs, 
  ContainerViewAsset, 
  ContainerIncome, 
  ContainerForm,
  ContainerData } from "./styled";
import { ButtonAdd } from '../../components/Buttons/styles'
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";
// import { apiCoin } from "../../services/api";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Modal from '@mui/material/Modal';
import Header from '../../components/Header/index'
import '../../../src/index.css'
import ModalCripoUpdate from '../../components/ModalEditCripto'
import ModalCripoDelete from '../../components/ModalDeleteCripto'

const Rendimentos = () => {
  const { data: dataContext } = useContext(AuthContext)
  // console.log("data Context", dataContext)
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [searchName, setSearchName] = useState("");
  const [searchSymbol, setSearchSymbol] = useState("");
  //Estado com objeto das informações dos usuário
  const [dataUser, setDataUser] = useState({})

  // console.log("dataModal", dataModal)
  
  //GET-> Show all Assets
  useEffect(() => {
    async function fetchMyCriptos () {
      try{ 
      const {data: response} = await api.get(`/cripto/${dataContext.id}`)
      if (response) {
        setData(response.data)
        // console.log("data Criptomoedas", response.data)
      }
    }
    catch(error){
      console.log("error " + error)
    }
  }
    fetchMyCriptos()
  }, []);

  // Set Filters Terms
  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    if (event.target.name == "nome") {
      setSearchName(event.target.value)
    }
    if (event.target.name == "simbolo") {
      setSearchSymbol(event.target.value)
    }
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("handleChange", form);
  };

  // console.log("searchName", searchName)
  // console.log("searchSymbol", searchSymbol)
   
  
  //----> Filtering Cripto by Name: Caso haja estado de "Search", irá atuar como filtro; caso não, atuará como (data)
  //OBS: é um filtro duplo, capaz de Pesquisar por Nome ou Símbolo
  let filterCoinsName
   function filtering () {
    console.log("searchName", searchName)
    console.log("searchSymbol", searchSymbol)
    try {
      filterCoinsName = data?.filter((coin) => coin.nome.toLowerCase()
      .includes(searchName.toLowerCase()))
      if (filterCoinsName.length < data.length) {
        filterCoinsName = filterCoinsName.filter((coin) => coin.simbolo.toLowerCase()
        .includes(searchSymbol.toLowerCase()))
        return filterCoinsName
      }
      if (searchName == "") {
        // console.log("filtrando apenas o símbolo", filterCoinsName)
        filterCoinsName =  data?.filter((coin) => coin.simbolo.toLowerCase()
        .includes(searchSymbol.toLowerCase()))
        return filterCoinsName
      }
       return filterCoinsName
    } catch (error) {
      console.log("Não foi possível filtrar as informações " + error)
    }
  }
  let dataFiltered = filtering()
  //-------->>>>


//------------>>>>
 //useEffect + UseState + Async/Await e Funções Recursivas
 //A) useEffect:
        //CallBack: se você utilizar um state aqui dentro, sem o useEffect as Funções Recursivas entrarão em Loop!
        //Dependência: lembre-se que ao utilizar um dado que retorna da API, provavelmente você precisara utilizar esse estado...
                       //...como dependência, pra executar o useEffect quando o response da API tiver sido bem sucedido

 //B) UseState: permite que o componente Re-Renderize (Re-Render), por isso, é utilizado ao invés de uma variável 
                //O JSX não conseguirá exibir um valor que ainda não está pronto em uma variável (Assíncronismo)...
                //...mas usando um estado (state), acontece um Re-Render aquele JSX quando o valor estiver sido setado
 //C) Async/Await: promises permitem retornar o valor quando ele estiver pronto

  //Promises: Promise é um objeto usado para processamento assíncrono.
  //           Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca. 

  //---->>> Erros Cometidos
  //1-Não utilizar Async/Await antes de setar os valores com o useState

  //2-Não criar uma condição de somente setar o estado quando a Promise tiver sido executada

  //3-Lembrar de colocar como dependência o "data", pois essa Promise pode ser retornada antes, e assim, não ter o valor disponível



  //Criando o objeto com as informações sobre as "quantidades investidas"
      //Qual o valor total investido
      //Qual a quantidade de moedas totais
      //Qual a projeção de ganhos baseada na cotação média dos últimos 30 dias

  let arr = []
  let arrQ = []
  useEffect(() => {
   async function handleDataUser () {
    console.log("data", data)
    try {
      arr.push(data.map((item, index) => item.valor_comprado))
      arrQ.push(data.map((item, index) => item.quantidade))
      console.log("arr", arr)
      const somar = await arr[0].reduce((prev, next) => {return prev + next}, 0)
      const somarQ = await arrQ[0].reduce((prev, next) => {return prev + next}, 0)
      const projecao = somar * 1.3
      if (somar) {
        setDataUser({valorInvestido: somar, quantidade: somarQ, projecaoDeGanhos: projecao})
        console.log("Agora funcionou")

      } else console.log("Algo deu errado com nossa Promise")

      console.log("dataUser", dataUser)
      console.log("somar", somar)
    } catch (error) {
        console.log("Não foi possível realizar a soma " + error)
    }
  }
  handleDataUser()
}, [data])
//------------>>>>


  //dataGrid - Tabela
  const columns = [
    { field: "id", headerName: "Id do Registro", width: 150 },
    { field: "nome", headerName: "Nome", width: 150 },
    { field: "simbolo", headerName: "Símbolo", width: 150 },
    { field: "image", 
      headerName: "Imagem", 
      width: 150,
      renderCell: (params) => <img className="cripto-image" src={params.value}/>
    },
    { field: "quantidade", headerName: "Quantidade", width: 200 },
    { field: "preco_de_compra", headerName: "Preço de Compra", width: 200 },
    { field: "valor_comprado", headerName: "Valor Comprado", width: 200 },
    {
      field: "edit",
      headerName: "Editar",
      width: 250,
      renderCell: (params) => <ButtonAdd
      type="submit"
      onClick={() => {
        setDataModal(data?.find((item) => {return (item.id == params.row.id)}))
        setOpenModalUpdate(true)
      }}
    >
      Editar Registro
    </ButtonAdd>
    },
    {
      field: "delete",
      headerName: "Apagar",
      width: 250,
      renderCell: (params) => 
      <ButtonAdd
      onClick={() => {
        setDataModal(data?.find((item) => {return (item.id == params.row.id)}))
        setOpenModalDelete(true)
      }}
    >Apagar Registro</ButtonAdd>
    },
  ];

  return (
    <Container>
    <Header/>
    <Modal
          open={openModalUpdate}
        >
          <ModalCripoUpdate setOpenModalUpdate={setOpenModalUpdate} dataModal={dataModal}/>
    </Modal>
    <Modal
          open={openModalDelete}
        >
        <ModalCripoDelete setOpenModalDelete={setOpenModalDelete} dataModal={dataModal}/>
    </Modal>
    <ContainerDashboard>
      <ContainerForm>
        <ContainerInputButton>
          {/* <InputButtonBorderLine> */}
            <header>
              <ContainerInputs>
                <div>
                  <label>Pesquisar Cripto</label>
                  <input
                    name="nome"
                    onChange={handleChange}
                    placeholder="Digite o Nome do Ativo"
                    type="text"
                  />
                </div>
                <div>
                  <label>Pesquisar Símbolo</label>              
                  <input
                    type="text"
                    name="simbolo"
                    onChange={handleChange}
                    placeholder="Digite o Símbolo da Criptomoeda"
                  />
                </div>
              </ContainerInputs>
            </header>    
          {/* </InputButtonBorderLine> */}
          <ContainerIncome>
            <ContainerData>
              <p>Projeção de Ganhos</p>
              <p>R$ {dataUser.projecaoDeGanhos}</p>
            </ContainerData>  
            <ContainerData>
              <p>Moedas Totais</p>
              <p>{dataUser.quantidade}</p>
            </ContainerData> 
            <ContainerData>
              <p>Valor Investido</p>
              <p>R$ {dataUser.valorInvestido}</p>
            </ContainerData> 
          </ContainerIncome>
        </ContainerInputButton>
          
        <ContainerViewAsset>
          <DataGrid
            rows={dataFiltered}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[50]}
            disablecheckboxSelection
          />
        </ContainerViewAsset>
      </ContainerForm>
    </ContainerDashboard>
    </Container>
  );
};

export default Rendimentos;
