import React, { useState, useRef } from "react";
import "../../css/CreateRestaurants.css";
import { FiPlusCircle, FiCheck, FiChevronLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import apiAccess from '../services/api-access';

const CreateRestaurants = () => {


  const [formData, setFormData] = useState({
    name: '',
    address: '',
    picture: '',
    menu: ''
  });

  const history = useHistory();
  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, address, picture, menu } = formData;
    const data = { name, address, picture, menu };

    console.log(data)
    try{
      await apiAccess.post('addbusiness', data);
      //TODO redirect para todos descontos
      history.push('/restaurant-profile');
    }catch(err){
      console.log(err);
    }
  };

  const uploadFile = async (e) => {
    const uploadData = new FormData();
    console.log(e.target);
    // try{
    //   await apiAccess.post('/picture/upload', theFile);
    // }catch(err){
    //   console.log(err);
    // }
  };

  // const uploadData = new FormData();
  //   let { name } = event.target.files[0];
  //   uploadData.append("imageUrl", event.target.files[0]);
  //   this.apiEndpoints.handleUpload(uploadData)
  //   .then(response => {
  //       this.setState({ picture: response.data.secure_url, pictureName: name });
  //     })
  //     .catch(err => {
  //       console.log("Error while uploading the file: ", err);
  //     });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  };


  console.log(formData)




  return (
    <div className="create-restaurants--container">
      <Link className='return-btn' to='/user-profile'>
        <FiChevronLeft size="20" color="#fff" />
      </Link>

      <h4>
        <span>Novo</span> estabelecimento
      </h4>

      <form className="form-new-restaurant" onSubmit={handleSubmit}>
        <div>
          <label id="name-label">
            Nome<span>*</span>
            <input placeholder='Insira aqui o nome do estabelecimento' name='name' id='name' type="text" onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label id="address-label">
            Endereço<span>*</span>
            <textarea name='address' id='address' placeholder='Insira aqui o endereço completo do estabelecimento' type="text" onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label id="picture-label">
            Foto<span>*</span>{" "}
            <button>
              <FiPlusCircle size="24" color="#FAAF40" />
              <input type="file" name='picture' id="picture" ref={inputFile} style={{display: "none"}} onChange={uploadFile} />
            </button>
          </label>
        </div>

        <div>
          <label id="menu-label">
            Cardapio<span>*</span>{" "}
            <button>
              <FiPlusCircle size="24" color="#FAAF40" />
              <input type="file" name='menu' id="menu" ref={inputFile} style={{display: "none"}} onChange={uploadFile} />
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
