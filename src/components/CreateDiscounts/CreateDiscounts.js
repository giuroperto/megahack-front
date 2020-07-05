import React, { useState, useRef, useEffect } from "react";
import "../../css/CreateDiscounts.css";
import { FiPlusCircle, FiCheck } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import apiAccess from '../services/api-access';

const CreateDiscounts = () => {

  const [selectedOwner, setSelectedOwner] = useState('');
  const [owner, setOwner] = useState([]);
  const [formData, setFormData] = useState({
    owner: '',
    title: '',
    description: '',
    picture: '',
    expiration: ''
  });

  useEffect(() => {
    apiData();

  }, []);

  const apiData = async () => {
    try {
      const response = await apiAccess.get('/allbusiness');
      console.log(response.data);
      setOwner(response.data);
    } catch (err) {
      console.log("Error while accessing API Data:", err);
    }
  };

  const history = useHistory();
  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { owner, title, description, picture, expiration } = formData;
    const data = { owner, title, description, picture, expiration };

    console.log(data);
    try{
      await apiAccess.post('add-discount', data);
      history.push('/discounts');
    }catch(err){
      console.log(err);
    }
  };

  const uploadFile = async (e) => {
    const uploadData = new FormData();
    console.log(e.target.files[0]);
    uploadData.append("imageUrl", e.target.files[0]);
    console.log(uploadData);
    
    try{
      const response = await apiAccess.post('/picture/upload', uploadData);
      console.log(response);
      setFormData({...formData, picture: response.data.secure_url});
    }catch(err){
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  };

  const handleSelectRestaurant  = (e) => {
    setFormData({...formData, owner: e.target.value})
  }

  console.log(formData)
  console.log(selectedOwner)

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
            <select name="owner" id="owner" value={formData.owner} onChange={handleSelectRestaurant}>
            <option value="0">Selecione seu restaurante</option>
              {owner.map(restaurant => {
                return <option value={restaurant._id}>{restaurant.name}</option>
              })}
            </select>
            <div>

        </div>
          </label>
        </div>

        <div>
          <label id="title-label">
            Título<span>*</span>
            <input type="text" name='title' id='title' onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label id="picture-label">
            Foto<span>*</span>{" "}
            <button onClick={handleClick}>
              <FiPlusCircle size="18" color="#FAAF40" />
              <input type="file" name='picture' id="picture" ref={inputFile} style={{display: "none"}} onChange={uploadFile} />
            </button>
          </label>
        </div>

        <div id="textarea-label">
          <label>
            Descrição<span>*</span>
          </label>
          <textarea type="text" name='description' id='description' required onChange={handleInputChange} />
        </div>

        <div>
          <label id="valid-label">
            Validade<span>*</span>
            <input type="date" name='expiration' id='expiration' onChange={handleInputChange} required />
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
