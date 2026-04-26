import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Colheita Direta</h3>
            <p>Conectando pequenos agricultores com comunidades para combater a fome e promover sustentabilidade.</p>
          </div>
          
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#produtores">Produtores</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Para Agricultores</h3>
            <ul>
              <li><a href="#cadastro">Cadastre sua Fazenda</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>📧 contato@colheitadireta.org</li>
              <li>📞 (11) 1234-5678</li>
              <li>📍 São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Colheita Direta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
