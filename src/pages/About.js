import React from 'react'

const About = () => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 className="section-title">Sobre o Colheita Direta</h1>
          <p className="section-subtitle">Conectando quem produz com quem precisa</p>
          
          <div className="about-content">
            <div className="about-text">
              <h2>Nossa Missão</h2>
              <p>
                O Colheita Direta nasceu da necessidade de criar uma ponte entre pequenos agricultores 
                e comunidades que enfrentam insegurança alimentar. Acreditamos que ninguém deveria 
                passar fome enquanto temos produtores dedicados que cultivam alimentos frescos e nutritivos.
              </p>
              
              <h2>Como Funciona</h2>
              <p>
                Nossa plataforma conecta diretamente agricultores familiares com consumidores, 
                eliminando intermediários e garantindo preços justos para ambos os lados. 
                Os agricultores recebem melhor remuneração por seu trabalho, enquanto as famílias 
                têm acesso a alimentos frescos, nutritivos e com preços acessíveis.
              </p>
              
              <h2>Nossos Valores</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>🌱 <strong>Sustentabilidade:</strong> Apoiamos práticas agrícolas que respeitam o meio ambiente</li>
                <li style={{ marginBottom: '1rem' }}>🤝 <strong>Comunidade:</strong> Fortalecemos laços entre produtores e consumidores</li>
                <li style={{ marginBottom: '1rem' }}>💚 <strong>Saúde:</strong> Promovemos alimentação saudável e nutritiva</li>
                <li style={{ marginBottom: '1rem' }}>⚖️ <strong>Justiça:</strong> Garantimos preços justos e transparência em todas as transações</li>
              </ul>
            </div>
            
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Nossa equipe trabalhando pela conexão campo-cidade"
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">Nossa História</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              Tudo começou em 2025, durante a faculdade, quando percebemos o aumento da insegurança 
              alimentar em muitas comunidades, enquanto agricultores familiares enfrentavam dificuldades 
              para escoar sua produção. Criamos então uma solução simples: uma plataforma digital que 
              conecta oferta e demanda de forma direta e eficiente.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '2rem' }}>
              Hoje, já somos referência em agricultura familiar e venda direta, impactando positivamente 
              a vida de milhares de pessoas em todo o estado de São Paulo. Nosso objetivo é expandir 
              essa conexão para todo o Brasil, mostrando que é possível criar um sistema alimentar 
              mais justo e sustentável.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
