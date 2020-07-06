import React from "react";
import "../../css/UserProfile.css";
import { FiPlusCircle, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileImg from '../../assets/img/profile.jpeg';

const UserProfile = () => {
  return (
    <div className="user-profile--container">
      <h2 className='app-name'>Thykhe</h2>
      
      <div className="user-info-box">
        <img src={profileImg} alt="foto-de-perfil"/>
        <div className="user-text-info">
          <h3>Laura Camargo</h3>
          <p>laura.camargo@gmail.com</p>
          <p>São Paulo, SP</p>
        </div>
      </div>

      <h2 className='points-header'>Você possui <span>32 pontos</span>!</h2>

      <table className='points-table'>
    <tr>
      <td>+5</td>
      <td>avaliei Lary's sorveteria</td>
    </tr>
    <tr>
      <td>+7</td>
      <td>adicionei 7 novas fotos aprovadas</td>
    </tr>
    <tr>
      <td>+5</td>
      <td>avaliei Douphie Bar & Restaurante</td>
    </tr>
    <tr>
      <td>+2</td>
      <td>visitei Lanchonete do Beto</td>
    </tr>
    <tr>
      <td>+5</td>
      <td>avaliei Lanchonete do Beto</td>
    </tr>
    <tr>
      <td>+5</td>
      <td>avaliei Bar do Zé</td>
    </tr>
    <tr>
      <td>+3</td>
      <td>adicionei 3 novas fotos aprovadas de Bar do Zé</td>
    </tr>
  </table>

  <div className="user-nav">
    <p>Troque seus pontos!</p>
    <Link to='/discounts'><h4>cupons disponíveis</h4></Link>
  </div>

  <div className="user-nav">
    <p>Veja os estabelecimentos mais cheios e vazios da sua região. </p>
    <Link to='/'><h4>heatmap</h4></Link>
  </div>

  <div className="user-nav">
    <p>Troque seus pontos!</p>
    <Link to='/rules'><h4>regras de pontuação</h4></Link>
  </div>

  <div className="user-nav">
    <p>Mande seu feedback!</p>
    <Link to='/restaurant-rating'><h4>avaliar estabelecimento</h4></Link>
  </div>

  <div className="user-nav">
    <p>Está num estabeleciomento que ainda não está disponível na plataforma?</p>
    <Link to='/create-restaurants'><h4>criar um novo estabelecimento</h4></Link>
  </div>
    </div>
  );
};

export default UserProfile;
