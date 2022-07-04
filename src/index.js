import ReactDOM from 'react-dom';
import React from 'react';

//import PrimeiroComponente from './componentes/primeiroComponente.jsx';
//import {CompA,CompB} from './componentes/DoisComponentes.jsx';
//import Multi from './componentes/MultiElementos.jsx'
import FamiliaSilva from './componentes/FamiliaSilva.jsx';
import Familia from './componentes/Familia';
import Membro from './componentes/Membro';


const elemento = document.getElementById('root');

ReactDOM.render(
  <>
    <Familia sobrenome="Silva">
      <Membro nome="Andre"  />
      <Membro nome="Mariana" />
    </Familia>
    <br/>
    <FamiliaSilva sobrenome="Silva Pereira"/>
  </>
  ,elemento)

