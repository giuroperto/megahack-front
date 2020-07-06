import React from "react";
import "../../css/RestaurantProfile.css";
import { IoIosStar, IoMdStarHalf } from "react-icons/io";
import { FiChevronLeft } from "react-icons/fi";

import { Link } from "react-router-dom";
import restaurantImg from '../../assets/img/bar-do-ze.jpeg';

const RestaurantProfile = () => {

  return (
    <div className="restaurant-profile--container">
      <Link className='return-btn' to='/'>
              <FiChevronLeft size="20" color="#fff" />
            </Link>
      <div className="restaurant-info-box">
        <img src={restaurantImg} alt="foto-de-perfil"/>
        <div className="restaurant-text-info">
          <h3>Bar do Zé</h3>
          <p>Av. Cidade Jardim, 1928</p>
          <p>São Paulo, SP</p>
          <div><IoIosStar color='#FAAF40'/><IoIosStar color='#FAAF40'/><IoIosStar color='#FAAF40'/><IoIosStar color='#FAAF40'/><IoMdStarHalf color='#FAAF40'/></div>
        </div>
      </div>

      <div className="restaurant-nav">
        <ul>
          <li><button>Avaliações</button></li>
          <li><button>Cardápio</button></li>
          <li><button>Mídia</button></li>
          <li><button>Comentário</button></li>
        </ul>
      </div>

      <div className="rating">
        <div>
          <h4>Limpeza</h4>
          <p><span>4.7</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Espaçamento entre mesas e cadeiras</h4>
          <p><span>3.7</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de materiais de proteção</h4>
          <p><span>4.0</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de insumos embalados individualmente</h4>
          <p><span>4.9</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Respeito ao limite de capacidade</h4>
          <p><span>4.2</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Funcionários conforme às normas e procedimentos de segurança e higiene</h4>
          <p><span>4.3</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Sinalização de normas e procedimentos seguros</h4>
          <p><span>4.2</span>/5</p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Ventilação do ambiente</h4>
          <p><span>4.8</span>/5</p>
        </div>
      </div>

      
    </div>
  );
};

export default RestaurantProfile;
