import React from 'react';
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://http2.mlstatic.com/painel-dragon-ball-super-goku-instinto-superior-130-x-80-cm-D_NQ_NP_708371-MLB26950160971_032018-F.jpg" alt=""/>
      <div>
      <strong>Goku </strong>
     
     <span> Artes Marciais</span>
      </div>
    </header>

    <p>Vem pro pau</p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 3.000.000,00</strong>
      </p>
      <button type='button'>
        <img src={WhatsappIcon} alt="Entrar em contato"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}
export default TeacherItem