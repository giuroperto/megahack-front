import React from "react";
import "../../css/CreateRestaurants.css";
import { FiPlusCircle, FiCheck, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const CreateRestaurants = () => {

  
  return (
    <div className="create-restaurants--container">
      <Link className='return-btn' to="/">
        <FiChevronLeft size="20" color="#fff" />
      </Link>

      <h4>
        <span>Novo</span> estabelecimento
      </h4>

      <form className="form-new-restaurant">
        <div>
          <label id="name-label">
            Nome<span>*</span>
            <input placeholder='Insira aqui o nome do estabelecimento' type="text" required />
          </label>
        </div>

        <div>
          <label id="address-label">
            Endereço<span>*</span>
            <textarea placeholder='Insira aqui o endereço completo do estabelecimento' type="text" required />
          </label>
        </div>

        <div>
          <label id="picture-label">
            Foto<span>*</span>{" "}
            <button>
              <FiPlusCircle size="24" color="#FAAF40" />
            </button>
          </label>
        </div>

        <div>
          <label id="menu-label">
            Cardapio<span>*</span>{" "}
            <button>
              <FiPlusCircle size="24" color="#FAAF40" />
            </button>
          </label>
        </div>

        <button className="submit-btn" type="submit">
          <p>
            <span>Cadastrar</span> estabelecimento
          </p>
          <FiCheck size="16" color="#000" />
        </button>
      </form>
    </div>
  );
};

export default CreateRestaurants;
