import React, { useState } from "react";
import { Container } from "./styled";
import { ContainerInput } from "./styled";

const Dashboard = () => {
  const [form, setForm] = useState({});
  console.log("form", form);

  const object = {
    nome: form?.nome,
  };

  console.log("object", object);
  console.log("form.nome", form?.nome);

  async function handleSubmit() {
    console.log("aqui");
  }

  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setForm({ [event.target.name]: event.target.value });
    // console.log("event.target", event.target);
    // console.log("event", event);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ContainerInput>
          <label>Ativo</label>
          <input
            name="nome"
            onChange={handleChange}
            placeholder="Digite o Nome do Ativo"
            value={form?.ativo}
          />
          <button>Adicionar</button>
          <label>Quantidade</label>
          <input
            type="number"
            name="nome"
            onChange={handleChange}
            placeholder="Digite o Valor Investido"
            value={form?.quantidade}
          />
          <button>Adicionar</button>
        </ContainerInput>
      </form>
    </Container>
  );
};

export default Dashboard;
