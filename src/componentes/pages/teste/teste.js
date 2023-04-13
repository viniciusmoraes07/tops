import React from 'react';
import './teste.css';

function Teste() {
    return (
        <div className="login-container">
          <div className="login-form">
            <h2>Fazer login</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nome de usuário" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Senha" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
          </div>
        </div>
      );
}

export default Teste;
