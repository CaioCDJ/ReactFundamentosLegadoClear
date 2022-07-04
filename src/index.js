import ReactDOM from 'react-dom';
import React from 'react';

//import PrimeiroComponente from './componentes/primeiroComponente.jsx';
//import {CompA,CompB} from './componentes/DoisComponentes.jsx';
//import Multi from './componentes/MultiElementos.jsx'
//import FamiliaSilva from './componentes/FamiliaSilva.jsx';
//import Familia from './componentes/Familia';
//import Membro from './componentes/Membro';
//import ComponenteComFuncao from './componentes/ComponenteComFuncao';
//import Pai from './componentes/Pai.jsx';
//import Classe from './componentes/ComponenteClasse.jsx';

import Contador from './componentes/Contador';

const elemento = document.getElementById('root');

ReactDOM.render(
  <>
    <Contador numero={0} />
    {/*
    <Classe valor="Sou uma classe"/>
   
    <Pai />
   
    <ComponenteComFuncao />
    
    <Familia sobrenome="Silva">
      <Membro nome="Andre"  />
      <Membro nome="Mariana" />
    </Familia>
    <br/>
    <FamiliaSilva sobrenome="Silva Pereira"/>
  */}

  </>
  ,elemento)

