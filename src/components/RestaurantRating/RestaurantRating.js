import React from "react";
import "../../css/RestaurantRating.css";
import { IoIosStar, IoMdStarHalf, IoIosStarOutline } from "react-icons/io";
import { FiChevronLeft, FiCircle } from "react-icons/fi";

import { Link } from "react-router-dom";
import restaurantImg from '../../assets/img/bar-do-ze.jpeg';

const RestaurantRating = () => {
  return (
    <div className="restaurant-rating--container">
      <Link className='return-btn' to='/'>
              <FiChevronLeft size="20" color="#fff" />
            </Link>
      <div className="restaurant-info-box">
        <img src={restaurantImg} alt="foto-de-perfil"/>
        <div className="restaurant-text-info">
          <h3>Bar do Zé</h3>
          <p>Av. Cidade Jardim, 1928</p>
          <p>São Paulo, SP</p>
        </div>
      </div>


      <div className="rating-stars">
        <div>
          <h4>Limpeza</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>

        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Espaçamento entre mesas e cadeiras</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de materiais de proteção</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de insumos embalados individualmente</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Respeito ao limite de capacidade</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Funcionários conforme às normas e procedimentos de segurança e higiene</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Sinalização de normas e procedimentos seguros</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Ventilação do ambiente</h4>
          <div><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/><IoIosStarOutline color='#FAAF40'/></div>
        </div>
      </div>

      <div className="rating-numbers">
        <h3>Qual o grau de lotação durante a sua experiência no estabelecimento?</h3>
        <div className="rating-circles">
          <ul>
            <li>1 <span><FiCircle color='#FAAF40' /></span></li>
            <li>2 <span><FiCircle color='#FAAF40' /></span></li>
            <li>3 <span><FiCircle color='#FAAF40' /></span></li>
            <li>4 <span><FiCircle color='#FAAF40' /></span></li>
            <li>5 <span><FiCircle color='#FAAF40' /></span></li>
            <li>6 <span><FiCircle color='#FAAF40' /></span></li>
            <li>7 <span><FiCircle color='#FAAF40' /></span></li>
            <li>8 <span><FiCircle color='#FAAF40' /></span></li>
            <li>9 <span><FiCircle color='#FAAF40' /></span></li>
            <li>10 <span><FiCircle color='#FAAF40' /></span></li>
          </ul>
        </div>

        <div className='rating-text'>
        <p>Muito movimentado</p>
        <p>Pouco movimentado</p>

        </div>

        <div className="rating-button">
        <h4>Eu gostaria de <span>avaliar um pouco mais.</span></h4>
        <button>enviar</button>
        </div>
      </div>


      
    </div>
  );
};

export default RestaurantRating;
