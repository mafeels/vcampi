import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { validateMatricula, validateSenha } from './regex';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase-config";
import Erro from "./Erro";
import { useNavigate } from 'react-router-dom';
import { validate } from 'schema-utils';

const Login = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(0);

  const navigate = useNavigate();

  useEffect( () => {
    console.log(["matricula ou senha invalida"]);
  },[erro])

  const [matriculaErr, setMatriculaErr] = useState('');
  const [senhaErr, setSenhaErr] = useState('');
  console.log({matriculaErr, senhaErr});

  // Handlers
  const handlerLogin = (e) => {
    e.preventDefault();
    const email = matricula + '@dac.unicamp.br';
    console.log(matriculaErr, senhaErr, "qual o erro?");
    console.log(matricula, "vamos ver");
    
    if(validateMatricula.test(matricula) && validateSenha.test(senha)){
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredentials)=>{
          setErro(0);
          const user = userCredentials.user;
          navigate('/main');
        })
        .catch((err) =>{
          setErro(2);
          console.log("nao logou");
        })

    }else{
      console.log("matricula ou senha falsa");
      setErro(1);
    }
  }

  const handlerCadastro = (e) => {
    e.preventDefault();
    navigate('/cadastro')
  }


  return (
    <>
      <div className='login container'>

        <img src='img/logo.png'/>

        <form>
          <div className='input-group mb-3 input-round-r'>
            <input 
            className='form-control' 
            placeholder="a999999" 
            type="text" 
            value={matricula}
            onChange={e => setMatricula(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon2">@dac.unicamp.br</span>
          </div>
          
          <div className='input-group input-round'>
            <input 
            className='form-control' 
            placeholder="sua senha" 
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            />
          </div>
          {erro === 1 && <Erro email={validateMatricula.test(matricula)} senha={validateSenha.test(senha)} erro={0}/> }
          {erro === 2 && <Erro email={true} senha={true} erro={2}/> }

          <div className='esqueciSenha'>
            <button className='btn'>Esqueci a Senha</button>
          </div>

          <div className='btn-login'>
            <button className='btn btn-primary' onClick={handlerLogin}>Login</button>
            <button className='btn btn-secondary btn-nocadastro' onClick={handlerCadastro} >Não tenho cadastro</button>
          </div>
			  </form>
      </div>
    </>
  )
}

export default Login