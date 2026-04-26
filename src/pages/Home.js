import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-agriculture.jpg'

const Home = () => {
  const producers = [
    {
      id: 1,
      name: "Fazenda Esperança",
      location: "Mogi Guaçu, SP",
      description: "Produção orgânica de hortaliças e frutas",
      products: "Hortaliças, Frutas, Legumes",
      image: "https://images.pexels.com/photos/6870811/pexels-photo-6870811.jpeg"
    },
    {
      id: 2,
      name: "Sítio Terra Viva",
      location: "Itapira, SP",
      description: "Agricultura familiar com foco em sustentabilidade",
      products: "Grãos, Cereais, Oleaginosas",
      image: "https://images.pexels.com/photos/1517195/pexels-photo-1517195.jpeg"
    },
    {
      id: 3,
      name: "Chácara Boa Vista",
      location: "São Paulo, SP",
      description: "Produtos frescos direto da roça para sua mesa",
      products: "Verduras, Temperos, Orgânicos",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  const products = [
    {
      id: 1,
      name: "Cesta Orgânica Completa",
      producer: "Fazenda Esperança",
      price: "R$ 45,00",
      description: "Variedade de hortaliças e frutas da estação",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Kit Grãos e Cereais",
      producer: "Sítio Terra Viva",
      price: "R$ 35,00",
      description: "Arroz, feijão, milho e trigo orgânicos",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Temperos Frescos",
      producer: "Chácara Boa Vista",
      price: "R$ 20,00",
      description: "Cheiro-verde, temperos e ervas aromáticas",
      image: "https://images.pexels.com/photos/20062653/pexels-photo-20062653.jpeg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Conectando <span style={{ color: '#8BC34A' }}>Agricultores</span> e{' '}
                <span style={{ color: '#FFC107' }}>Comunidades</span>
              </h1>
              <p>
                Combatemos a fome conectando pequenos produtores rurais diretamente 
                com famílias e instituições que precisam de alimentos frescos e nutritivos.
              </p>
              
              <div className="hero-actions">
                <a href="/#produtores" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                  Encontrar Produtores →
                </a>
                <Link to="/produtores" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                  🌿 Cadastre seus produtos
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>150+</div>
                  <div>Agricultores</div>
                  <div>Conectados</div>
                </div>
                <div className="stat-card">
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>500+</div>
                  <div>Produtos</div>
                  <div>Disponíveis</div>
                </div>
                <div className="stat-card">
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>10K+</div>
                  <div>Famílias</div>
                  <div>Beneficiadas</div>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-image-placeholder">
                <img
                  src={heroImage}
                  alt="Agricultores locais oferecendo produtos frescos para a comunidade"
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
              <div className="floating-card">
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50' }}>2.5M+</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Pessoas em insegurança alimentar no Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section" style={{ backgroundColor: '#f8fafb', padding: '4rem 0' }}>
        <div className="container">
          <div className="video-section" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Conheça Nossa Missão</h2>
            <p className="section-subtitle">Assista ao vídeo e veja como estamos transformando a agricultura familiar</p>
            
            <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <iframe
                  src="https://www.youtube.com/embed/Z5EQVm20ngE"
                  title="Conheça a Colheita Direta"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px'
                  }}
                ></iframe>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://youtu.be/Z5EQVm20ngE?si=VjHy2vURt-pilW1p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '1.1rem', padding: '0.8rem 2rem', textDecoration: 'none', display: 'inline-block' }}
                >
                  📺 Assistir no YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producers Section */}
      <section id="produtores" className="section">
        <div className="container">
          <h2 className="section-title">Nossos Produtores</h2>
          <p className="section-subtitle">Conheça os agricultores que fazem parte da nossa comunidade</p>
          
          <div className="producers-grid">
            {producers.map(producer => (
              <div key={producer.id} className="card">
                <div className="card-image">
                  <img
                    src={producer.image}
                    alt={`Produtor ${producer.name}`}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{producer.name}</h3>
                  <p><strong>📍 {producer.location}</strong></p>
                  <p className="card-description">{producer.description}</p>
                  <p><strong>Produtos:</strong> {producer.products}</p>
                  <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Ver Produtos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="section" style={{ backgroundColor: '#f8fafb' }}>
        <div className="container">
          <h2 className="section-title">Produtos em Destaque</h2>
          <p className="section-subtitle">Alimentos frescos diretamente do produtor</p>
          
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="card">
                <div className="card-image">
                  <img
                    src={product.image}
                    alt={`Produto ${product.name}`}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <p><strong>👨‍🌾 {product.producer}</strong></p>
                  <p className="card-description">{product.description}</p>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50', margin: '1rem 0' }}>
                    {product.price}
                  </div>
                  <button className="btn btn-primary">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="section impact-section">
        <div className="container">
          <h2 className="section-title">Nosso Impacto</h2>
          <p className="section-subtitle">Juntos estamos fazendo a diferença</p>
          
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">50%</div>
              <div className="impact-label">De redução no desperdício de alimentos</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">30%</div>
              <div className="impact-label">De economia para as famílias</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">200+</div>
              <div className="impact-label">Toneladas de alimentos distribuídos</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">15</div>
              <div className="impact-label">Municípios atendidos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
