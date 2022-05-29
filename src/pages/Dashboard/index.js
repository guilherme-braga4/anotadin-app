import React, { useState, useEffect } from "react";
import { Container, ContainerDashboard, ContainerInputButton, ContainerInputs, ContainerViewAsset, InputButtonBorderLine } from "./styled";
import { ButtonAdd } from '../../components/Buttons/styles'
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Header from '../../components/Header/index'

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  const [asset, setAsset] = useState([]);

  //GET-> Show all Assets
  useEffect(() => {
    // try {
    console.log("aqui");
    api
      .get(`/criptomoedas`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Algo deu errado " + error);
      });
  }, []);

  //POST-> Create a New Asset
  async function handleSubmit(event) {
    // event.preventDefault();
    console.log("submit");
    console.log("aqui 2");
    const data = {
      nome: form?.nome,
      quantidade: form?.quantidade,
    };
    api
      .post(`/criptomoedas`, data)
      .then((res) => {
        console.log("res.data", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log("Algo deu errado" + error);
      });
  }

  // Lidando com as mudanças do componente
  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("handleChange", form);
  };

  //dataGrid - Tabela
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "nome", headerName: "Ativo", width: 300 },
    { field: "quantidade", headerName: "Quantidade", width: 250 },
    {
      field: "edit",
      headerName: "Editar",
      width: 150,
      renderCell: (params) => <AutoFixNormalIcon/>,
    },
    {
      field: "delete",
      headerName: "Excluir",
      width: 150,
      renderCell: (params) => <RemoveCircleIcon />,
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
      <form onSubmit={handleSubmit}>
        <ContainerInputButton>
          {/* <InputButtonBorderLine> */}
            <header>
              <ContainerInputs>
                <div>
                  <label>Ativo</label>
                  <input
                    name="nome"
                    onChange={handleChange}
                    placeholder="Digite o Nome do Ativo"
                  />
                </div>
                <div>
                  <label>Quantidade</label>              
                  <input
                    type="number"
                    name="quantidade"
                    onChange={handleChange}
                    placeholder="Digite o Valor Investido"
                  />
                </div>
                <ButtonAdd
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Adicionar Ativo
                </ButtonAdd>
              </ContainerInputs>
            </header>    
          {/* </InputButtonBorderLine> */}
        </ContainerInputButton>
        <ContainerViewAsset>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            disablecheckboxSelection
          />
        </ContainerViewAsset>
      </form>
    </ContainerDashboard>
    </Container>
  );
};

export default Dashboard;
