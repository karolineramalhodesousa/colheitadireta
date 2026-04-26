import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Producers = () => {
  const navigate = useNavigate()

const Producers = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    ownerName: '',
    email: '',
    phone: '',
    location: '',
    products: '',
    experience: '',
    description: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cadastro realizado com sucesso! Entraremos em contato para finalizar seu registro.')
    setFormData({
      farmName: '',
      ownerName: '',
      email: '',
      phone: '',
      location: '',
      products: '',
      experience: '',
      description: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('produtorData', JSON.stringify(formData))
    navigate('/home-produtor')
  }


  const benefits = [
    {
      icon: '💰',
      title: 'Melhor Remuneração',
      description: 'Venda direta sem intermediários, recebendo até 50% a mais por seus produtos'
    },
    {
      icon: '🤝',
      title: 'Conexão Direta',
      description: 'Relacionamento direto com os consumidores, criando lealdade e confiança'
    },
    {
      icon: '📈',
      title: 'Mais Visibilidade',
      description: 'Sua propriedade e produtos divulgados para milhares de potenciais clientes'
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade',
      description: 'Apoio a práticas agrícolas sustentáveis e orgânicas'
    },
    {
      icon: '📚',
      title: 'Capacitação',
      description: 'Cursos e workshops sobre gestão, marketing e técnicas agrícolas'
    },
    {
      icon: '🚚',
      title: 'Logística',
      description: 'Apoio na distribuição e entrega dos produtos aos consumidores'
    }
  ]

  return (
    <div>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 className="section-title">Seja um Produtor Colheita Direta</h1>
          <p className="section-subtitle">Conectamos sua produção diretamente com quem precisa</p>
          
          <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '3rem', borderRadius: '15px', margin: '3rem 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌾 Junte-se a nós!</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
              Mais de 150 agricultores já fazem parte da nossa comunidade. 
              Cadastre sua propriedade e comece a vender diretamente para milhares de famílias.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>150+</div>
                <div>Agricultores</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>50%</div>
                <div>Mais de lucro</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>10K+</div>
                <div>Clientes ativos</div>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Benefícios de ser um Produtor Colheita Direta
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333' }}>{benefit.title}</h3>
                <p style={{ color: '#666' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8fafb' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Formulário de Cadastro
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nome da Propriedade *
                  </label>
                  <input
                    type="text"
                    name="farmName"
                    value={formData.farmName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Localização (Cidade/Estado) *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Principais Produtos *
                </label>
                <input
                  type="text"
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  placeholder="Ex: Hortaliças, Frutas, Grãos, etc."
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Tempo de Experiência na Agricultura
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Ex: 5 anos, mais de 10 anos, etc."
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Descrição da Propriedade
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Fale um pouco sobre sua propriedade, métodos de cultivo, certificações, etc."
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

                const navigate = useNavigate();
                return (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ fontSize: '1.2rem', padding: '1rem 3rem', width: '100%' }}
                    onClick={() => navigate("/homepage-produtor")}
                  >
                    🌱 Cadastrar Minha Propriedade
                  </button>
                );

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
}

export default Producers
