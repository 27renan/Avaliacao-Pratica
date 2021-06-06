import styled from 'styled-components'

export const AreaSignIn = styled.section`
  background-color: #FFF8DC;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  
  /*Animação login*/
  @keyframes animacaoAreaLogin {
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
  }

  .caixa-login{
    width: 500px;
    height: 350px;
    background-color:#DCDCDC;
    border-radius: 25px;
    animation-name: animacaoAreaLogin;
    animation-duration: 2s;

    .title{
    display: flex;
    justify-content: center;
    color: blue;
    margin-top: 20px;
    font-family: 'Nunito', sans-serif;
  }
  .title h1::after{
    content: '';
    width: 110px;
    height: 4px;
    background: white;
    display: block;
    margin-left: 10px;
  }

  form{
    margin-top: 40px;
  }

  input{
    width: 90%;
    margin-left: 5%;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 30px;
    border: 2px solid  #fff;
  }

  button{
    width: 90%;
    margin-left: 5%;
    height: 33px;
    border-radius: 10px;
    background-color: #3CB371;
    border: 0px solid  #fff;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button:hover{
    background-color:#2E8B57;
  }

  .errorMessage{
    color: #0000FF;
    display: flex;
    justify-content: center;
  }
}
`;