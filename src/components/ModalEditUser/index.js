import React, {useState, useEffect, useContext} from 'react'
import { Container, ContainerDisplayModal, ContainerButton, ContainerForm } from './styles.js'
import { ButtonFilled, ButtonNoBackground } from '../Buttons/styles';
import api from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

const ModalEditUser = ({setOpenModalUserEdit}) => {
  // console.log(setOpenModalUserEdit)
  const { data } = useContext(AuthContext)
  const [form, setForm] = useState({id: data.id, nome: data.nome, email: data.email, telefone: data.telefone})
  console.log("data", data)
  console.log("form", form)
 
  async function handleUpdateUser () {
    try {
    const res = await api.put(`/user/${data.id}`, form)
    if (res.data.data) {
      toast.success("Registro de Usuário Atualizado com Sucesso!");
      setOpenModalUserEdit(false)
    }
  } catch (error) {
    console.error(error)
    toast.error("Falha ao atualizar o seu Registro")
  }
  }

  
  function handleChange (e) {
    console.log({name: e.target.name, value: e.target.value})
    setForm({...form, [e.target.name]: e.target.value})
  }


  return ( 
    <Container>
      <ContainerDisplayModal>
        <ContainerForm>
            <h1>{data.nome}, edite as suas informações</h1>
            {/* <img src={dataModal.image} size={20}/> */}
            <p>Após editar os campos, clique em Salvar</p>
              <div>
                <label>Nome</label>
                <input 
                name="nome" 
                type="text" 
                onChange={(e) => handleChange(e)} 
                defaultValue={data.nome}
                />
              </div>
              <div>
                <label>Email</label>
                <input 
                placeholder="Digite o valor em Dólar" 
                name="email" 
                type="text"  
                onChange={(e) => handleChange(e)} 
                defaultValue={data.email}
                />
              </div>
              <div>
                <label>Telefone</label>
                <input 
                name="telefone" 
                type="number"  
                onChange={(e) => handleChange(e)} 
                defaultValue={data.telefone}
                />
              </div>
              <ContainerButton>
                <div>
                  <ButtonNoBackground type="submit" onClick={() => setOpenModalUserEdit(false)}>Fechar</ButtonNoBackground>
                  <ButtonFilled type="submit" onClick={() => handleUpdateUser()}>Salvar</ButtonFilled>
                </div>
              </ContainerButton>
          </ContainerForm>
      </ContainerDisplayModal>
    </Container>
   );
}
 
export default ModalEditUser;