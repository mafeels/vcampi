import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config';
import { useNavigate } from 'react-router-dom';

const Cadastro = (props) => {
  const childToParent = props.childToParent;
  const setUser = props.setUser;
  const [usuario, setUsuario] = useState({
    'email':'',
    'senha':''
  });

  const navigate = useNavigate();

  const institutos=[
    { value: '', text: 'Escolha seu Instituto' },
    { value: '1', text: 'IA - Instituto de Artes' },
    { value: '2', text: 'IG - Instituto de Geociências' },
    { value: '3', text: 'IEL - Instituto de Estudos da Linguagem' },
  ];

  const cadastro = async () => {
    const email = usuario.email + '@dac.unicamp.br';
    console.log(email);
    const senha = usuario.senha;
    try{
      const user = await createUserWithEmailAndPassword(auth, email, senha);

      //console.log(auth);
    }catch(err){
      console.log(err.message);
      console.log("algum erro :<");
    }
    
  };

  const handlerCadastro = (e) => {
    e.preventDefault();
    cadastro();
  }

  const handlerEmail = (e) => {
    const nome = 'email';
    const value = e.target.value;
    setUsuario({...usuario, [nome]:value});
    console.log(usuario.email);
  }

  const handlerSenha = (e) => {
    const nome = 'senha';
    const value = e.target.value;
    setUsuario({...usuario, [nome]:value});
    console.log("mudou senha")
  }

  const handlerVoltar = () =>{
    console.log("working");
    navigate('/')
  }

  return (
    <>
      <div className='login container'>

        <img src='img/logo.png' alt='Logo'/>

        <form>
          <div className='input-group mb-3 input-round-r'>
            <input 
              className='form-control' 
              placeholder="a999999" 
              type="text" 
              value={usuario.email}
              onChange={handlerEmail}/>
            <span className="input-group-text" id="basic-addon2">@dac.unicamp.br</span>
          </div>
          
          <div className='input-group mb-3 input-round'>
            <input 
              className='form-control' 
              placeholder="sua senha" 
              type="password"
              value={usuario.senha}
              onChange={handlerSenha}/>
          </div>

          <div className='input-group mb-3 '>
            {/*<input className='form-control' placeholder="instituto" type="search" name="" id="" />*/}
            <select className='form-select input-round'>
              {institutos.map(instituto => (
                <option key={instituto.value} value={instituto.value}>{instituto.text}</option>
              ))}
            </select>
          </div>

          <div className='input-group mb-3 input-round'>
            <input className='form-control' placeholder="curso" type="text"/>
          </div>

          <div className='input-group mb-3 input-round'>
            <input className='form-control' placeholder="ano de ingresso" type="text"/>
          </div>

          <div className='btn-login'>
            <button className='btn btn-primary' onClick={handlerCadastro}>Cadastro</button>
            <button className='btn btn-secondary btn-nocadastro' onClick={handlerVoltar} >Voltar</button>
          </div>
		    </form>
    </div>
    </>
  )
}

export default Cadastro