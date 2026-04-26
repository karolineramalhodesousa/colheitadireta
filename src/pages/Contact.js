import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: 'general'
    })
  }

  return (
    <div>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 className="section-title">Fale Conosco</h1>
          <p className="section-subtitle">Estamos aqui para ajudar e conectar</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#333' }}>Envie sua mensagem</h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Tipo de Contato
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '5px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="general">Geral</option>
                    <option value="producer">Sou Produtor</option>
                    <option value="consumer">Sou Consumidor</option>
                    <option value="partner">Parceria</option>
                    <option value="volunteer">Voluntariado</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
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

                <button type="submit" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#333' }}>Informações de Contato</h2>
              
              <div style={{ backgroundColor: '#f8fafb', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>📧 E-mail</h3>
                  <p style={{ fontSize: '1.1rem' }}>contato@colheitadireta.org</p>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>📞 Telefone</h3>
                  <p style={{ fontSize: '1.1rem' }}>(11) 1234-5678</p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>Segunda a Sexta: 8h às 18h</p>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>📍 Endereço</h3>
                  <p style={{ fontSize: '1.1rem' }}>
                    Rua das Agriculturas, 123<br />
                    Vila Rural, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
                
                <div>
                  <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>🔄 Redes Sociais</h3>
                  <p style={{ fontSize: '1.1rem' }}>
                    <button style={{ color: '#4CAF50', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Instagram</button> | 
                    <button style={{ color: '#4CAF50', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '0.5rem' }}>Facebook</button> | 
                    <button style={{ color: '#4CAF50', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '0.5rem' }}>WhatsApp</button>
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderRadius: '10px', border: '1px solid #ffeaa7' }}>
                <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>⏰ Horário de Atendimento</h3>
                <p style={{ color: '#856404' }}>
                  <strong>Segunda a Sexta:</strong> 8h às 18h<br />
                  <strong>Sábado:</strong> 9h às 12h<br />
                  <strong>Domingo:</strong> Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
