import React from 'react';
import '../../css/Discounts.css';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import sorveteImg from '../../assets/img/sorvete.jpeg';

const Discounts = () => {
  return(
      <div className="discounts-container">
            <Link className='return-btn' to='/'>
              <FiChevronLeft size="20" color="#fff" />
            </Link>

            <h4>Troque seus pontos aqui!</h4>

            <h2><span>Descontos</span>, <span>promoções</span>, <span>ofertas</span> e <span>benefícios</span> disponíveis</h2>

            <div className="img-box">
              <img src={sorveteImg} alt="sorvete-desconto"/>
              <h3>Na compra de 1, ganhe outro!</h3>
              <p>Lary's Sorveteria • 60 pontos</p>
            </div>

            <div className="img-box">
              <img src={sorveteImg} alt="sorvete-desconto"/>
              <h3>Na compra de 1, ganhe outro!</h3>
              <p>Lary's Sorveteria • 60 pontos</p>
            </div>  

      </div>
  )
}

export default Discounts;