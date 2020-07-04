import React from "react";
import "../../css/CreateDiscounts.css";
import { FiPlusCircle, FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';

const CreateDiscounts = () => {
  return (
    <div className="create-discounts--container">
      <h2>Nome do App</h2>
      <div className="client-name">
        <h3>
          E aí, <span>Jorge Santos</span>!
        </h3>
        <p>
          Crie descontos, promoções e ofereça muito mais aos seus clientes em
          troca de pontos!
        </p>
      </div>

      <h4>
        <span>Novo</span> cupom
      </h4>

      <form className="form">

      <div>
        <label id='restaurant-label'>
          Estabelecimento<span>*</span>
          <select name="restaurants" id="restaurants" >
            <option value="" selected disabled hidden></option>
            <option value="bar">Bar do Zé</option>
            <option value="forneria">Forneria do Chico</option>
            <option value="hamburgueria">Hamburgueria do Julio</option>
          </select>
        </label>
      </div>

        <div>
          <label id='title-label'>
            Título<span>*</span>
            <input type="text" required />
          </label>
        </div>

        <div>
          <label id='picture-label'>
            Foto<span>*</span>{" "}
            <button>
              <FiPlusCircle size="18" color="#FAAF40" />
            </button>
          </label>
        </div>

        <div id="textarea-label">
          <label>
            Descrição<span>*</span>
          </label>
            <textarea type="text" required />
        </div>

        <div>
          <label id='valid-label'>
            Validade<span>*</span>
            <input type="text" required />
          </label>
        </div>

        <button className="btn" type="submit">
          <p>
            <span>Cadastrar</span> item
          </p>
          <FiCheck size="16" color="#000" />
        </button>
      </form>
      
      <Link to='/discounts'>
      <p className="all-itens">
        ou <span>veja todos os itens</span>
      </p>
      </Link>
    </div>
  );
};

export default CreateDiscounts;
