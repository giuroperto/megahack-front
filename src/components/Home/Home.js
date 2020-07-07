import React from 'react';
import '../../css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
      <div className="home-container">
        <Link to='/create-discounts' className='invisible-link'>CREATE DISCOUNT</Link>
        <p className='only-desktop'>Pelo visto você está tentando visualizar nosso web app em um desktop... Como idealizamos para ser mobile-first, por gentileza alterar tamanho de tela para menor que 787px :)</p>
        <h1>Thykhe</h1>
        <h2>A responsável pela volta da prosperidade ao seu estabelecimento!</h2>
        <Link to='/login'>login</Link>
        <Link to='/signup'>cadastre-se</Link>
      </div>
  )
}

export default Home;
