import React from 'react';
import '../../css/CreateDiscounts.css';
import { FiPlus, FiPlusCircle, FiCheck } from 'react-icons/fi';

const CreateDiscounts = () => {
  return(
      <div className="create-discounts--container">
        <h2>Uruz</h2>
        <div className="client-name">
          <h3>E aí, <span>Jorge Santos</span></h3>
          <p>Crie descontos, promoções e ofereça muito mais aos seus clientes em troca de pontos!</p>
        </div>

        <h4><span>Novo</span> item</h4>

        <form className="form">
          <label>Estabelecimento*
          <select name="restaurants" id="restaurants">
            <option value="bar">Bar do Zé</option>
            <option value="forneria">Forneria do Chico</option>
            <option value="hamburgueria">Hamburgueria do Julio</option>
          </select>
          </label>

          <label>Título* <input type="text" value='titulo' required/></label>
          <label>Foto* <button><FiPlusCircle size='16' color='#FAAF40'/></button></label>
          <label>Descrição* <textarea type="text" value='descricao' required/></label>
          <label>Validade* <input type="text" value='validade' required/></label>

          <button className="btn" type='submit'><p><span>Cadastrar</span> item</p> <FiCheck size='16' color='#000' /></button>
        </form>
      </div>
  )
}

export default CreateDiscounts;