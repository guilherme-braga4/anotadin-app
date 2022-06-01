import React, {useState, useEffect, useContext} from 'react'
import { Container, ContainerDisplayModal, ContainerButton, ContainerForm } from './styles.js'
import { ButtonFilled, ButtonNoBackground } from '../Buttons/styles';
import api from '../../services/api'
import AuthContext from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

const ModalCripoDelete = ({setOpenModalDelete, dataModal}) => {
  const { data } = useContext(AuthContext)
  const [form, setForm] = useState({user_id: data.id, nome: dataModal.name, simbolo: dataModal.symbol})
  const [quantidade, setQuantidade] = useState(0)
  // const {data}  = useContext(AuthContext)

  console.log("form", form)
 
  async function updateCripto () {
    try {
    const res = await api.put('/cripto/', form)
    if (res.data.data) {
      toast.success("Registro atualizado com sucesso");
      setOpenModalDelete(false)
    }
  } catch (error) {
    console.error(error)
    toast.error("Falha ao atualizar o Registro da Criptomoeda")
  }
  }

  //----> Função que exibe a Quantidade, de acordo com o (Preço de Compra) e (Quantidade Comprada) (em R$ ou $) 
  //Para evitar que Quantidade inicialize como NaN, é feito um tramento
  let value
  useEffect(() => {
    async function CalcularQuantidadeCripto () {
      if (form.valor_comprado !== undefined && form.preco_de_compra !== undefined) {
      value = Number(form.valor_comprado) / Number(form.preco_de_compra) 
      setQuantidade(value)
      setForm({...form, quantidade: value})
      if (form.quantidade == NaN) {
        form.quantidade = 0
      }
    } else value = 0
    }
    CalcularQuantidadeCripto()
  }, [form.valor_comprado, form.preco_de_compra])
  //----> Função que exibe a Quantidade, de acordo com o (Preço de Compra) e (Quantidade Comprada) (em R$ ou $) 


  function handleChange (e) {
    console.log({name: e.target.name, value: e.target.value})
    setForm({...form, [e.target.name]: e.target.value})
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
                  <ButtonNoBackground type="submit" onClick={() => updateCripto()}>Confirmar</ButtonNoBackground>
                </div>
              </ContainerButton>
          </ContainerForm>
      </ContainerDisplayModal>
    </Container>
   );
}
 
export default ModalCripoDelete;