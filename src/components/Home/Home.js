import React from 'react';
import '../../css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
      <div className="home-container">
        <h1>Tique</h1>
        <h2>frase de efeito muito legal!</h2>
        <Link to='/login'>login</Link>
        <Link to='/signup'>cadastre-se</Link>
      </div>
  )
}

export default Home;
