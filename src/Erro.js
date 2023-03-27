import React from 'react'

const Erro = (props) => {
  return (
    <div>
        {props.erro==2 && <span>email ou senha não existe</span> }
        {!props.email && <span>A matricula está no formato incorreto </span>}
        <br/>
        {!props.senha && <span>A senha precisa de 8 caracteres </span>}
    </div>
  )
}

export default Erro