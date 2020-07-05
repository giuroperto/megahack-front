import React, { useState, useEffect } from 'react';
import '../../css/Discounts.css';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import sorveteImg from '../../assets/img/sorvete.jpeg';
import apiAccess from '../services/api-access';

const Discounts = () => {

  const [discounts, setDiscounts] = useState([]);


  useEffect(() => {
    apiData();

  }, []);

  const apiData = async () => {
    try {
      const response = await apiAccess.get('/discounts');
      console.log(response.data);
      setDiscounts(response.data);
    } catch (err) {
      console.log("Error while accessing API Data:", err);
    }
  };

  const apiBusinessGet = async (id) => {
    try{
      const owner = await apiAccess.get(`/business/${id}`);
      console.log(owner.data.name);
      return owner.data.name;
    }catch(err){
      console.log("Error while accessing API Data:", err);
    }
  }

  return(
      <div className="discounts-container">
            <Link className='return-btn' to='/'>
              <FiChevronLeft size="20" color="#fff" />
            </Link>

            <h4>Troque seus pontos aqui!</h4>

            <h2><span>Descontos</span>, <span>promoções</span>, <span>ofertas</span> e <span>benefícios</span> disponíveis</h2>

            <div className="img-box">
            { discounts.map((el, idx) => {
              console.log(el);
              return (<><img key={idx} src={el.picture} alt="sorvete-desconto"/><h3>{el.title}</h3><p>{el.owner.name} • 60 pontos</p></>)
            })}
            </div> 

            //TODO deletar modelo abaixo

            <div className="img-box">
              <img src={sorveteImg} alt="sorvete-desconto"/>
              <h3>Na compra de 1, ganhe outro!</h3>
              <p>Lary's Sorveteria • 60 pontos</p>
            </div>  

      </div>
  )
}

export default Discounts;