import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {  AreaSignIn } from './stylesSignIn.js'
import Footer from '../../components/Footer.js'
import users from '../../users.json'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  const [isFocusPassword, setIsFocusPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  /* Hook usado para redirecionamento apos login */
  const history = useHistory();

  //classes para alterar o border do input
  let classEmailFocus = style.focusEmail
  let classPasswordFocus = style.focusPassword

  // verifica se o focus do input esta com valor true ou false para alterar o style do border
  isFocusEmail ? classEmailFocus = style.focusEmail : classEmailFocus = style.semFocusEmail
  isFocusPassword ? classPasswordFocus = style.focusPassword : classPasswordFocus = style.semFocusPassword

  /* Verfica se os campos foram preenchidos, useEffect é monitora os estados emai e
  password, sendo disparado sempre que houver mudança */
  useEffect(() => {
    if(email === '' || password === ''){
      setErrorMessage('* Campos obrogatórios!!!')
      return
    }

    setErrorMessage('')
  }, [email,password])

 /*OBS(backend): não usei nenhuma api para geraçao e
  validação de token para login, mas poderia ser usado um backend para isso, porém
  como foi pedido somento o frontend coloquei essa observação. Utilizei um arquivo JSON
  para simular dados (OBS: os dados poderiam estar em banco de dados, porém como foi pedido somento 
  o frontend coloquei essa observação).
  
 Função pra validar e redirecionar o login */
 const handleFormSubmit = () =>{
  function Redirect(){
    users.forEach(user  => {
      /* Valido se o usuario é valido que qual o tipo dele para fazer o redirecionamento */
      if(user.email === email && user.typeUser === 'cooperativa' && user.password === password){
        return history.push('Cooperativa')
    }
      /* Valido se o usuario é valido que qual o tipo dele para fazer o redirecionamento */
      else if(user.email === email && user.typeUser === 'motorista' && user.password === password){
       return history.push('/motorista')
    }
      else{
        setErrorMessage('Usúario ou Senha Inválidos!!');
        return;
      }
      })
    }
  Redirect();
}
 /*Captura os dados do input */
 const handleEmailSignIn = (event) =>{
  setEmail(event.target.value)
}

/*Captura os dados do input */
const handlePasswordSignIn = (event) =>{
  setPassword(event.target.value)
}

  return (
    <>
      <AreaSignIn>
        <div className="caixa-login">
          <div className="title">
            <h1>The Sistema</h1>
          </div>
 
          <form>
            <input autoFocus
              style={classEmailFocus}
              type="email" 
              className="inputEmail" 
              placeholder="* Email..."
              onChange={handleEmailSignIn}
              onFocus={() => setIsFocusEmail(true)}
              onBlur={() => setIsFocusEmail(false)}
              />

              <input
               style={classPasswordFocus}
               type='password' 
               placeholder='* Senha...'
               onChange={handlePasswordSignIn}
               onFocus={() => setIsFocusPassword(true)}
               onBlur={() => setIsFocusPassword(false)}
              />

            <button type="submit" onClick={handleFormSubmit} disabled={errorMessage.trim() !== ''}> Entrar </button>
          </form>
          <div>
            <span className="errorMessage">{errorMessage}</span>
          </div>
        </div>
      </AreaSignIn>
      <Footer copyright="© Copyright 2021 The Sistema All Right Reserved" />
    </>
  );
}

/* Estilos para o focus do input */
const style = {
  focusEmail: {
    color:'#0000FF',
    borderColor: '#0000FF'
  },
  semFocusEmail:{
    color: '#0000FF',
    borderColor: '#fff'
  },
  focusPassword: {
    color:'#0000FF',
    borderColor: '#0000FF'
  },
  semFocusPassword:{
    color: '#0000FF',
    borderColor: '#fff'
  }
}