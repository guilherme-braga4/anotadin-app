import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext'
import { Container, ContainerDashboard, ContainerInputButton, ContainerInputs, ContainerViewAsset, InputButtonBorderLine, ContainerForm } from "./styled";
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
  console.log("data Context", dataContext)
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [searchName, setSearchName] = useState("");
  const [searchSymbol, setSearchSymbol] = useState("");

  console.log("dataModal", dataModal)
  
  //GET-> Show all Assets
  useEffect(() => {
    async function fetchMyCriptos () {
      const {data: response} = await api.get(`/cripto/${dataContext.id}`)
      if (response) {
        setData(response.data)
        console.log("data Criptomoedas", response.data)
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

  console.log("searchName", searchName)
  console.log("searchSymbol", searchSymbol)
   
  
  //----> Filtering Cripto by Name: Caso haja estado de "Search", irá atuar como filtro; caso não, atuará como (data)
  //OBS: é um filtro duplo, capaz de Pesquisar por Nome ou Símbolo
  let filterCoinsName
   function filtering () {
    try {
      filterCoinsName = data?.filter((coin) => coin.nome.toLowerCase()
      .includes(searchName.toLowerCase()))
      if (filterCoinsName.length < data.length) {
        filterCoinsName = filterCoinsName.filter((coin) => coin.simbolo.toLowerCase()
        .includes(searchSymbol.toLowerCase()))
        return filterCoinsName
      }
      if (searchName == "") {
        console.log("filtrando apenas o símbolo", filterCoinsName)
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


  //dataGrid - Tabela
  const columns = [
    { field: "id", headerName: "Id do Registro", width: 250 },
    { field: "image", headerName: "Imagem", width: 200 },
    { field: "image", 
      headerName: "Imagem", 
      width: 150,
      renderCell: (params) => <img className="cripto-image" src={params.value}/>
    },
    // {
    //   field: "price_change_24h",
    //   headerName: "Flutuação",
    //   width: 250,
    //   renderCell: (params) => params.value > 0 ? <div className="high_24h">{params.value}</div> : <div className="low_24h">{params.value}</div>,
    // },
    { field: "quantidade", headerName: "Quantidade", width: 200 },
    { field: "preco_de_compra", headerName: "Preço de Compra", width: 300 },
    { field: "valor_comprado", headerName: "Valor Comprado", width: 250 },
    {
      field: "edit",
      headerName: "Editar",
      width: 300,
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
      width: 300,
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
                {/* <ButtonAdd
                  type="submit"
                  onClick={() => {
                    createNewAsset();
                  }}
                >
                  Adicionar Ativo
                </ButtonAdd> */}
              </ContainerInputs>
            </header>    
          {/* </InputButtonBorderLine> */}
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
