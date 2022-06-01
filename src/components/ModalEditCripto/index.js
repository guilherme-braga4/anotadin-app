import React, {useState, useEffect, useContext} from 'react'
import { Container, ContainerDisplayModal, ContainerButton, ContainerForm } from './styles.js'
import { ButtonFilled, ButtonNoBackground } from '../Buttons/styles';
import api from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

const ModalCripoUpdate = ({setOpenModalUpdate, dataModal}) => {
  const { data } = useContext(AuthContext)
  const [form, setForm] = useState({id: dataModal.id, nome: dataModal.name, simbolo: dataModal.symbol})
  const [quantidade, setQuantidade] = useState(dataModal.quantidade)
  console.log("data", data)

  console.log("form", form)
 
  async function handleUpdateCripto () {
    try {
    const res = await api.put(`/cripto/${data.id}`, form)
    if (res.data.data) {
      toast.success("Registro atualizado com sucesso");
      setOpenModalUpdate(false)
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
            <h1>Edite o registro #{dataModal.id} da Criptomoeda {dataModal.nome}</h1>
            <img src={dataModal.image} size={20}/>
            <p>Após editar os campos, clique em Salvar</p>
              <div>
                <label>Símbolo</label>
                <input name="symbol" disabled value={dataModal.simbolo}/>
              </div>
              {/* <div>
                <label>Preço Atual</label>
                <input name="preco_atual" type="number" disabled value={dataModal.current_price}/>
              </div> */}
              <div>
                <label>Preço de Compra</label>
                <input 
                placeholder="Digite o valor em Dólar" 
                name="preco_de_compra" 
                type="number" 
                onChange={(e) => handleChange(e)} 
                defaultValue={dataModal.preco_de_compra}/>
              </div>
              <div>
                <label>Valor Comprado</label>
                <input 
                placeholder="Digite o valor em Dólar" 
                name="valor_comprado" 
                type="number" 
                onChange={(e) => handleChange(e)} 
                defaultValue={dataModal.valor_comprado}/>
              </div>
              <div>
                <label>Quantidade</label>
                <input 
                name="quantidade" 
                disabled 
                value={quantidade}/>
              </div>
              <ContainerButton>
                <div>
                  <ButtonNoBackground type="submit" onClick={() => setOpenModalUpdate(false)}>Fechar</ButtonNoBackground>
                  <ButtonFilled type="submit" onClick={() => handleUpdateCripto()}>Salvar</ButtonFilled>
                </div>
              </ContainerButton>
          </ContainerForm>
      </ContainerDisplayModal>
    </Container>
   );
}
 
export default ModalCripoUpdate;