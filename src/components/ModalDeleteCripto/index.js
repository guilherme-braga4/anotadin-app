import React, {useState, useEffect, useContext} from 'react'
import { Container, ContainerDisplayModal, ContainerButton, ContainerForm } from './styles.js'
import { ButtonFilled, ButtonNoBackground } from '../Buttons/styles';
import api from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

const ModalCripoDelete = ({setOpenModalDelete, dataModal}) => {
  const { data } = useContext(AuthContext)
 
  async function handleDeleteCripto () {
    try {
    const res = await api.delete(`/cripto/${dataModal.id}`)
    if (res.data.data) {
      toast.success("Registro apagado com sucesso");
      setOpenModalDelete(false)
    }
  } catch (error) {
    console.error(error)
    toast.error("Falha ao apagar o Registro da Criptomoeda")
  }
  }

  return ( 
    <Container>
      <ContainerDisplayModal>
        <ContainerForm>
            <h1>Registro de {dataModal.nome}</h1>
            <img src={dataModal.image} size={20}/>
            <p>Confirme a exclusão desse Registro #{dataModal.id}</p>
              <div>
                <h1>Tem certeza que gostaria de excluir esse registro?</h1>
              </div>
              <ContainerButton>
                <div>
                  <ButtonFilled type="submit"onClick={() => setOpenModalDelete(false)}>Cancelar</ButtonFilled>
                  <ButtonNoBackground type="submit" onClick={() => handleDeleteCripto()}>Confirmar</ButtonNoBackground>
                </div>
              </ContainerButton>
          </ContainerForm>
      </ContainerDisplayModal>
    </Container>
   );
}
 
export default ModalCripoDelete;