import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #0000FF;
  display: flex;
  justify-content: space-between;

  .Left{
    color: #fff;
    display: flex;
    align-items: center;
    margin-left:30px;
    font-family: 'Nunito', sans-serif;
  }

  .Left h3{
    margin-right: 30px;
    font-weight: bold;
  }

  .Rigth{
    color: #fff;
    display: flex;
    align-items: center;
  }

  .Rigth{
    margin-left: 30px;
  }

  .Rigth h4{
    margin-left: 5px;
  }

  .Rigth a{
    color: #fff;
    text-decoration: none;
    margin-right:30px;
    margin-left: 30px;
  }
  
`;

export const Table = styled.section`
  margin-top: 100px;
  margin-bottom: 50px;
  .table{
    border-spacing: 55px;
    width: 90%;
    text-align: center;
    border: 1px solid blue;
    margin-left: 5%;
    border-radius: 20px;
  }
  
`;

export const Input = styled.div`
  margin-top: 35px;
  float: right;
  margin-right:5%;
  input{
    width: 150px;
    height: 30px;
    border: 2px solid blue;
    border-radius: 10px;
    padding: 10px;
  }
  label{
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    margin-right: 5px;
  }
`;

