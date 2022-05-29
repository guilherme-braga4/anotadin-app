import React, { useState, useEffect } from "react";
import { Container, ContainerDashboard, ContainerInputButton, ContainerInputs, ContainerViewAsset, InputButtonBorderLine, ContainerForm } from "./styled";
import { ButtonAdd } from '../../components/Buttons/styles'
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";
import { apiCoin } from "../../services/api";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Modal from '@mui/material/Modal';
import Header from '../../components/Header/index'
import '../../../src/index.css'
import ModalCripto from '../../components/ModalAddCripto'

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [searchName, setSearchName] = useState("");
  const [searchSymbol, setSearchSymbol] = useState("");

  console.log("dataModal", dataModal)
  
  //GET-> Show all Assets
  useEffect(() => {
    async function fetchCriptos () {
      const {data: response} = await apiCoin.get("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      if (response) {
        setData(response)
        console.log("data Criptomoedas", response)
      }
    }
    fetchCriptos()
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
     filterCoinsName = data.filter((coin) => coin.name.toLowerCase()
    .includes(searchName.toLowerCase()))
    if (filterCoinsName.length < data.length) {
      filterCoinsName = filterCoinsName.filter((coin) => coin.symbol.toLowerCase()
      .includes(searchSymbol.toLowerCase()))
      return filterCoinsName
    }
    if (searchName == "") {
      console.log("filtrando apenas o símbolo", filterCoinsName)
      filterCoinsName = data.filter((coin) => coin.symbol.toLowerCase()
      .includes(searchSymbol.toLowerCase()))
    }
    return filterCoinsName
}

  let dataFiltered = filtering()
  //-------->>>>


  //dataGrid - Tabela
  const columns = [
    { field: "id", headerName: "Criptomoeda", width: 150 },
    { field: "image", 
      headerName: "Imagem", 
      width: 150,
      renderCell: (params) => <img className="cripto-image" src={params.value}/>
    },
    { field: "symbol", headerName: "Símbolo", width: 150 },
    {
      field: "price_change_24h",
      headerName: "Flutuação",
      width: 250,
      renderCell: (params) => params.value > 0 ? <div className="high_24h">{params.value}</div> : <div className="low_24h">{params.value}</div>,
    },
    { field: "current_price", headerName: "Preço Atual", width: 250 },
    { field: "high_24h", headerName: "Alta em 24h", width: 200 },
    { field: "low_24h", headerName: "Baixa em 24h", width: 250 },
    {
      field: "edit",
      headerName: "Cadastrar",
      width: 300,
      renderCell: (params) => <ButtonAdd
      type="submit"
      onClick={() => {
        setDataModal(data.find((item) => {return (item.id == params.row.id)}))
        setOpenModal(true)
      }}
    >
      Adicionar Ativo
    </ButtonAdd>,
    },
  ];

  return (
    <Container>
    <Header/>
    <Modal
          open={openModal}
        >
          <ModalCripto setOpenModal={setOpenModal} dataModal={dataModal}/>
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

export default Dashboard;
