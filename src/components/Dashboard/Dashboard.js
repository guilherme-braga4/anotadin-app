import React, { useState, useEffect } from "react";
import { Container, ContainerInput, ContainerViewAsset } from "./styled";
import { DataGrid } from "@material-ui/data-grid";
import { v4 as uuid } from "uuid";
import api from "../../services/api";

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [asset, setAsset] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // try {
    console.log("aqui");
    api
      .get("/api/v1/criptomoedas")
      .then((res) => {
        // console.log("res", res);
        setData(res.data);
      })
      // console.log("res.data", res.data);
      // if (res.data) {
      //   setData(res.data);
      //   console.log("res.data", res.data);
      // }
      .catch((error) => {
        console.log("Algo deu errado" + "" + error);
      });
  }, []);

  const handleAddAsset = (event) => {
    const assetsList = Array.from(asset);
    console.log("assetList", assetsList);
    assetsList.push({ form });
    setAsset(assetsList);
    console.log("asset", asset);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  }

  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value, id: uuid() });
    console.log("handleChange", form);
  };

  //dataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "nome", headerName: "Ativo", width: 300 },
    { field: "quantidade", headerName: "Quantidade", width: 250 },
    { field: "edit", headerName: "Editar", width: 250 },
    { field: "delete", headerName: "Excluir", width: 250 },
  ];

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ContainerInput>
          <div>
            <label>Ativo</label>
            <input
              name="nome"
              onChange={handleChange}
              placeholder="Digite o Nome do Ativo"
            />
            <label>Quantidade</label>

            <input
              type="number"
              name="quantidade"
              onChange={handleChange}
              placeholder="Digite o Valor Investido"
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              handleAddAsset();
            }}
          >
            Adicionar Ativo
          </button>
        </ContainerInput>
        <ContainerViewAsset>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          {asset.map((asset) => {
            return (
              <>
                <div>
                  ID: {asset?.form?.id}, {asset?.form?.nome}, R${" "}
                  {asset?.form?.quantidade}
                </div>
              </>
            );
          })}
        </ContainerViewAsset>
        ;
      </form>
    </Container>
  );
};

export default Dashboard;
