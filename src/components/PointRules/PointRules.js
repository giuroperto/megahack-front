import React from "react";
import "../../css/PointRules.css";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const PointRules = () => {
  return (
    <div className="rules--container">
      <Link className='return-btn' to="/">
        <FiChevronLeft size="20" color="#fff" />
      </Link>

      <h4>
        <span>Regras</span> de pontuação
      </h4>

      <p>Como ganhar mais pontos? Ou começar a ganhar? Talvez essas sejam perguntas que você fez e aqui vamos mostrar como conquistar cada vez mais pontos para trocar por benefícios em diversos estabelecimentos, sejam estes bares, restaurantes, sorveterias, cafeterias, pizzarias, pastelarias, dentre muitos outros.</p>
      <p>Atualmente, nossa plataforma aceita os seguintes meios para a obtenção de pontos, olha só:</p>
      <ul>
        <li>- Avalie os estabelecimentos: cada vez que você preencher nosso formulário de feedback você adquiri 5 pontos;</li>
        <li>- Visite os estabelecimentos mais vazios: visite nosso heatmap e ganhe 2 pontos caso ele esteja com um fluxo baixo de pessoas;</li>
        <li>- Compartilhe: adquira 1 ponto para cada envio de foto ou vídeo válido dos estabelecimentos disponíveis na nossa plataforma;</li>
        <li>- Crie: para cada novo estabelecimento criado válido, ganhe 5 pontos.</li>
      </ul>

      <p>Assim, todo mundo ganha: você e os estabelecimentos.</p>

      <p>Comece agora sua incrível jornada conosco! :)</p>
    </div>
  );
};

export default PointRules;
