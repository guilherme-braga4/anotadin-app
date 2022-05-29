import React, { useState, useEffect } from "react";
import { Container, ContainerDashboard, ContainerInputButton, ContainerInputs, ContainerViewAsset, InputButtonBorderLine } from "./styled";
import { ButtonAdd } from '../../components/Buttons/styles'
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";
import { apiCoin } from "../../services/api";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Header from '../../components/Header/index'
import '../../../src/index.css'

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  const [asset, setAsset] = useState([]);

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

  //POST-> Create a New Asset
    async function createNewAsset(event) {
      const res = api.post('/cripto')
      if (res) {
        setData(res)
      }
    }

  // Lidando com as mudanças do componente
  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("handleChange", form);
  };

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
        createNewAsset();
      }}
    >
      Adicionar Ativo
    </ButtonAdd>,
    },
  ];

  //Inserir as informações localmente

  // const handleAddAsset = (event) => {
  //   const assetsList = Array.from(asset);
  //   console.log("assetList", assetsList);
  //   assetsList.push({ form });
  //   setAsset(assetsList);
  //   console.log("asset", asset);
  // };

  return (
    <Container>
    <Header/>
    <ContainerDashboard>
      <form>
        <ContainerInputButton>
          {/* <InputButtonBorderLine> */}
            <header>
              <ContainerInputs>
                <div>
                  <label>Pesquisar Cripto</label>
                  <input
                    name="nome"
                    onChange={handleChange}
                    // placeholder="Digite o Nome do Ativo"
                    type="text"
                  />
                </div>
                <div>
                  <label>Pesquisar Símbolo</label>              
                  <input
                    type="text"
                    name="quantidade"
                    onChange={handleChange}
                    // placeholder="Digite o Valor Investido"
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
            rows={data}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[50]}
            disablecheckboxSelection
          />
        </ContainerViewAsset>
      </form>
    </ContainerDashboard>
    </Container>
  );
};

export default Dashboard;
