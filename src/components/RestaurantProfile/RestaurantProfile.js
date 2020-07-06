import React, { useState } from "react";
import "../../css/RestaurantProfile.css";
import { IoIosStar, IoMdStarHalf } from "react-icons/io";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import restaurantImg from "../../assets/img/bar-do-ze.jpeg";
import menuImg from "../../assets/img/menu.jpeg";
import gridImg1 from "../../assets/img/rest-1.jpeg";
import gridImg2 from "../../assets/img/rest-2.jpeg";
import gridImg3 from "../../assets/img/rest-3.jpeg";
import gridImg4 from "../../assets/img/rest-4.jpeg";
import gridImg5 from "../../assets/img/rest-5.jpeg";

const RestaurantProfile = () => {
  const [pages, setPages] = useState({
    rating: true,
    menu: false,
    midia: false,
    review: false,
  });

  const ratingClick = () => {
    setPages({ rating: true, menu: false, midia: false, review: false });
  };

  const menuClick = () => {
    setPages({ rating: false, menu: true, midia: false, review: false });
  };

  const mediaClick = () => {
    setPages({ rating: false, menu: false, midia: true, review: false });
  };

  const reviewClick = () => {
    setPages({ rating: false, menu: false, midia: false, review: true });
  };

  console.log(pages)

  return (
    <div className="restaurant-profile--container">
      <Link className="return-btn" to="/">
        <FiChevronLeft size="20" color="#fff" />
      </Link>
      <div className="restaurant-info-box">
        <img src={restaurantImg} alt="foto-de-perfil" />
        <div className="restaurant-text-info">
          <h3>Bar do Zé</h3>
          <p>Av. Cidade Jardim, 1928</p>
          <p>São Paulo, SP</p>
          <div>
            <IoIosStar color="#FAAF40" />
            <IoIosStar color="#FAAF40" />
            <IoIosStar color="#FAAF40" />
            <IoIosStar color="#FAAF40" />
            <IoMdStarHalf color="#FAAF40" />
          </div>
        </div>
      </div>

      <div className="restaurant-nav">
        <ul>
          <li>
            <button onClick={ratingClick}>Avaliações</button>
          </li>
          <li>
            <button onClick={menuClick}>Cardápio</button>
          </li>
          <li>
            <button onClick={mediaClick}>Mídia</button>
          </li>
          <li>
            <button onClick={reviewClick}>Comentário</button>
          </li>
        </ul>
      </div>
    
      {pages.rating ?
      <>
      <div className="rating">
        <div>
          <h4>Limpeza</h4>
          <p>
            <span>4.7</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Espaçamento entre mesas e cadeiras</h4>
          <p>
            <span>3.7</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de materiais de proteção</h4>
          <p>
            <span>4.0</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Disponibilidade de insumos embalados individualmente</h4>
          <p>
            <span>4.9</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Respeito ao limite de capacidade</h4>
          <p>
            <span>4.2</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>
            Funcionários conforme às normas e procedimentos de segurança e
            higiene
          </h4>
          <p>
            <span>4.3</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Sinalização de normas e procedimentos seguros</h4>
          <p>
            <span>4.2</span>/5
          </p>
        </div>
      </div>

      <div className="rating">
        <div>
          <h4>Ventilação do ambiente</h4>
          <p>
            <span>4.8</span>/5
          </p>
        </div>
      </div>
      </>
      : (pages.menu ? 
      <div className='restaurant-menu'>
        <img src={menuImg} alt='cardapio'/>
      </div>
      : 
      <div className='restaurant-midia'>
      <div class="grid">
        <div className="grid-item"><img src={gridImg5} alt="restaurante"/></div>
        <div className="grid-item"><img src={gridImg2} alt="restaurante"/></div>
        <div className="grid-item"><img src={gridImg3} alt="restaurante"/></div>
        <div className="grid-item"><img src={gridImg4} alt="restaurante"/></div>
        <div className="grid-item"><img src={gridImg1} alt="restaurante"/></div>
        <div className="grid-item"><img src={gridImg5} alt="restaurante"/></div>
    </div>
      </div>
      )
      }
        
    </div>
  );
};

export default RestaurantProfile;
