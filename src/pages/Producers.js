import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Producers = () => {
  const navigate = useNavigate()

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

              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="products"
                value={formData.products}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-primary"
                style={{ fontSize: '1.2rem', padding: '1rem 3rem', width: '100%' }}
              >
                🌱 Cadastrar Minha Propriedade
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Producers
