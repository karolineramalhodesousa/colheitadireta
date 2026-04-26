import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🌱</div>
            <div className="logo-text">
              <h1>Colheita Direta</h1>
              <p>Conectando agricultores</p>
            </div>
          </Link>

          <nav>
            <ul className="nav-links">
              <li><a href="/#produtores">Produtores</a></li>
              <li><a href="/#produtos">Produtos</a></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><a href="/#impacto">Impacto</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link to="/cadastro-comprador" className="btn btn-outline">
              🛒 Cadastrar Comprador
            </Link>
            <button className="btn btn-outline">
              ❤️ Apoiar Projeto
            </button>
            <Link to="/contato" className="btn btn-primary">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
