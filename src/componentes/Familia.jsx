import React from 'react';
import {filhosComProps} from '../Utils.js';

export default props => 
  <div>
    <h1>Familia {props.sobrenome}</h1>
    {filhosComProps(props)}    
  </div>

