import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { Header, Table, Input } from './stylesListCooperativa.js'
import Footer from '../../components/Footer.js'
import {FaUserAlt} from 'react-icons/fa'
import data from '../../data.json'

export default function ListCooperativa() {
  const [busca, setBusca] = useState('')

  /*Utilizei um arquivo JSON para simular dados (OBS: os dados poderiam estar em banco de dados, 
    porém como foi pedido somento o frontend coloquei essa observação). */
  
  /* Captura o input do filtro */
  const handleBusca = (event) =>{
      setBusca(event.target.value)
  }

  /* Gero un novo array a partir do filtro passado no input */
  const filter = data.dados.filter((dado) => dado.data_programada.includes(busca))

  return (
    <>
      <Header>
        <div className="Left">
          <h3>The Sistemas</h3>
          <h4>Atendimentos</h4>
        </div>
        <div className="Rigth">
        <FaUserAlt /><h4>Olá, Cooperativa</h4>
          <Link to="/">Sair</Link>
        </div>
      </Header>

      <Input>
        <label>Filtrar Por Período</label><input type="texto" onChange={handleBusca} placeholder="Informe a data"/>
      </Input>

     <Table>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Passageiro</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Horário Programado</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
          {filter.map((dado) =>{
              return(
                <tr key={dado.key}>
                  <td>{dado.id}</td>
                  <td>{dado.passageiro}</td>
                  <td>{dado.origem}</td>
                  <td>{dado.destino}</td>
                  <td>{dado.data_programada}  {dado.horario_programado}</td>
                  <td>{dado.situacao}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </Table>

        <Footer copyright="© Copyright 2021 The Sistema All Right Reserved"/>
    </>
  );
}
