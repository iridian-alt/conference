import React from 'react';
import ReactDOM from 'react-dom';

import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
/*{ <Badge firstName="Iridian" lastName="Carrera" professionIs="Frontend Engineer" avatarUrl="https://www.gravatar.com/avatar?d=identicon" userTwitter="letrasdeunautordesconocido" /> }*/