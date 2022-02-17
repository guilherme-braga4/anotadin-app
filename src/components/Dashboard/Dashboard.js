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
          <input name="nome" onChange={handleChange} value={form?.nome} />
          <button>Pesquisar</button>
        </ContainerInput>
      </form>
    </Container>
  );
};

export default Dashboard;
