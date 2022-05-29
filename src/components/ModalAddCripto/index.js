import React, {useState, useEffect} from 'react'
import { Container, ContainerDisplayModal, ContainerButton, ContainerForm } from './styles.js'
import { ButtonFilled, ButtonNoBackground } from '../Buttons/styles';
import api from '../../services/api'

const ModalCripto = ({setOpenModal, dataModal}) => {

  // console.log("setOpenModal", setOpenModal)
  // console.log("dataModal", dataModal)
  const [form, setForm] = useState({nome: dataModal.name, simbolo: dataModal.symbol})
  const [quantidade, setQuantidade] = useState(0)

  console.log("form", form)
 
  async function createCriptomoeda () {
    const res = api.post('/cripto/', form)
    if (res) {
      console.log(res.data)
      setOpenModal(false)
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
            <h1>Cadastre a sua quantidade de {dataModal.name}</h1>
            <img src={dataModal.image} size={20}/>
            <p>Complete os campos cadastrar essa Criptomoeda</p>
              <div>
                <label>Símbolo</label>
                <input name="symbol" disabled value={dataModal.symbol}/>
              </div>
              <div>
                <label>Preço Atual</label>
                <input name="preco_atual" type="number" disabled value={dataModal.current_price}/>
              </div>
              <div>
                <label>Preço de Compra</label>
                <input placeholder="Digite o valor em Dólar" name="preco_de_compra" type="number" onChange={(e) => handleChange(e)} defaultValue={0}/>
              </div>
              <div>
                <label>Valor Comprado</label>
                <input placeholder="Digite o valor em Dólar" name="valor_comprado" type="number" onChange={(e) => handleChange(e)} defaultValue={0}/>
              </div>
              <div>
                <label>Quantidade</label>
                <input name="quantidade" disabled value={quantidade}/>
              </div>
              <ContainerButton>
                <div>
                  <ButtonNoBackground type="submit" onClick={() => setOpenModal(false)}>Fechar</ButtonNoBackground>
                  <ButtonFilled type="submit" onClick={() => createCriptomoeda()}>Cadastrar</ButtonFilled>
                </div>
              </ContainerButton>
          </ContainerForm>
      </ContainerDisplayModal>
    </Container>
   );
}
 
export default ModalCripto;