import React, { useState } from "react";
import { Container } from "./styled";
import { ContainerInput } from "./styled";

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [asset, setAsset] = useState([]);
  console.log("form", form);

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
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("handleChange", form);
  };

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
            Adicionar
          </button>
          {asset.map((asset) => {
            return (
              <>
                <div>{asset?.form?.nome}</div>
                <div>R$ {asset?.form?.quantidade}</div>
              </>
            );
          })}
        </ContainerInput>
      </form>
    </Container>
  );
};

export default Dashboard;
