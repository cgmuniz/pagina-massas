import './App.css';
import React from "react";
import Rodape from './components/commons/rodape/Rodape';
import NavLab from './components/commons/nav/Nav';
import Header from './components/commons/header/Header';

import { Outlet } from 'react-router-dom';

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      db: 0,
    };
    this.exibirVisitas();
  }
  
  exibirVisitas() {
    fetch("http://localhost:8000/")
      .then((response) => response.text())
      .then((responseText) => {
        const numero = parseInt(responseText, 10);

        this.setState({
          db: numero,
        });
      });
  }
  
  
  render(){
    return (
      <div className="App">
        <Header />
        <NavLab  n_visitas={this.state.db}/>
        <Outlet />
        <Rodape/>
      </div>
    );
  }
}
