import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const navigate = useNavigate();
  const handlerSair = () => {
    navigate('/');
  }
  return (
    <React.Fragment>
    <div className='perfil rounded'>
        <div className='perfil-ctd rounded'>
            <div className='perfil-nome rounded'>
              <h4>@usuario</h4>
              <h4>IA</h4>
            </div>
            <img className="" src="./usuario.png" alt=""/>
            <h6>Curso:</h6><p>Comunicação Social - Midialogia</p>
            <h6>Ingresso:</h6><p>2019</p>
            <button className='btn btn-primary btn-sm'>Configurações</button>
            <button className='btn btn-danger btn-sm' onClick={handlerSair}>Sair</button>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Perfil