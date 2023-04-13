import React from 'react';
import { Link } from 'react-router-dom';
import Titulo from '../../atoms/titulo/Titulo';

function TopBar({corTitulo, tamanhoTitulo, titulo, listaLinks}) {
  return (
    <header style={{ backgroundColor: 'black', color: 'red', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Titulo cor={corTitulo} tamanho={tamanhoTitulo} texto={titulo}/>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          {
            listaLinks.map((link) => (
                <li key = {link.rota} style={{ marginRight: '20px' }}><Link to={link.rota}>{link.titulo}</Link></li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;
