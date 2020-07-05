import React, { useState, useRef, useEffect } from "react";
import "../../css/CreateDiscounts.css";
import { FiPlusCircle, FiCheck } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import apiAccess from '../services/api-access';

const CreateDiscounts = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiration, setExpiration] = useState('');
  const [picture, setPicture] = useState('');
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    try {
      const response = await apiAccess.get('/allbusiness');
      console.log(response.data)
      setOwner(response.data)
    } catch (err) {
      console.log("Error while accessing API Data:", err);
    }
  };

  const history = useHistory();
  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await apiAccess.post('/adddiscount', { owner, title, description, picture, expiration });
      //TODO redirect para todos descontos
      history.push('/');
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div className="create-discounts--container">
      <h2 className='app-name'>Nome do App</h2>
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

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label id="restaurant-label">
            Estabelecimento<span>*</span>
            <select name="restaurants" id="restaurants">
              {owner.map(restaurant => {
                return <option value={restaurant.name}>{restaurant.name}</option>
              })}
            </select>
          </label>
        </div>

        <div>
          <label id="title-label">
            Título<span>*</span>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          </label>
        </div>

        <div>
          <label id="picture-label">
            Foto<span>*</span>{" "}
            <button onClick={handleClick}>
              <FiPlusCircle size="18" color="#FAAF40" />
              <input type="file" id="file" ref={inputFile} style={{display: "none"}} value={picture} onChange={e => setPicture(e.target.value)} />
            </button>
          </label>
        </div>

        <div id="textarea-label">
          <label>
            Descrição<span>*</span>
          </label>
          <textarea type="text" required value={description} onChange={e => setDescription(e.target.value)} />
        </div>

        <div>
          <label id="valid-label">
            Validade<span>*</span>
            <input type="date" value={expiration} onChange={e => setExpiration(e.target.value)} required />
          </label>
        </div>

        <button className="submit-btn" type="submit">
          <p>
            <span>Cadastrar</span> item
          </p>
          <FiCheck size="16" color="#000" />
        </button>
      </form>

      <Link to="/discounts">
        <p className="all-itens">
          ou <span>veja todos os itens</span>
        </p>
      </Link>
    </div>
  );
};

export default CreateDiscounts;
