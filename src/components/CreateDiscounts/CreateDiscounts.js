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
  const [owner, setOwner] = useState('');

  const history = useHistory();
  const inputFile = useRef(null);

  useEffect(() => {
    const { name, address, coordinates } = apiAccess.getAllBusinesses();
    console.log(name, address, coordinates);
  });


  const handleClick = () => {
    inputFile.current.click();
  }

  const handleFileUpload = async (e) => {
    const fileUploaded = new FormData();
    let { name } = e.target.files[0];
    fileUploaded.append("imageUrl", e.target.files[0]);

    try{
      await this.apiAccess.uploadFile(fileUploaded);
      setPicture(e.target.value)
      console.log(picture);
    }catch(err){
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await apiAccess.addDiscount(title, description, expiration, picture, owner);
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
              <option value="" selected disabled hidden></option>
              <option value="bar">Bar do Zé</option>
              <option value="forneria">Forneria do Chico</option>
              <option value="hamburgueria">Hamburgueria do Julio</option>
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
              <input type="file" id="file" ref={inputFile} style={{display: "none"}} value={picture} onChange={e => handleFileUpload(e)} />
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
