import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomepageProdutor = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('produtorData')
    if (saved) {
      setData(JSON.parse(saved))
    } else {
      navigate('/produtores')
    }
  }, [navigate])

  if (!data) return null

  const initials = data.ownerName
    ? data.ownerName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?'

  const productList = data.products
    ? data.products.split(',').map(p => p.trim()).filter(Boolean)
    : []

  return (
    <div style={{ fontFamily: 'inherit', backgroundColor: '#f4f1eb', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Cabeçalho */}
        <div style={{
          backgroundColor: '#4CAF50',
          borderRadius: '12px',
          padding: '1.5rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              backgroundColor: '#a3c46a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', fontWeight: '600', color: '#4CAF50', flexShrink: 0
            }}>
              {initials}
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '18px', fontWeight: '600', color: '#e8f5d0' }}>
                Bem-vindo, {data.ownerName}
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#a3c46a' }}>
                {data.farmName} · Cadastrado hoje
              </p>
            </div>
          </div>
          <span style={{
            fontSize: '11px', fontWeight: '600',
            backgroundColor: '#a3c46a', color: '#4CAF50',
            padding: '4px 12px', borderRadius: '20px'
          }}>
            Conta ativa
          </span>
        </div>

        {/* Sua propriedade */}
        <p style={{ fontSize: '14px', fontWeight: '600', color: '#555', marginBottom: '0.75rem' }}>
          Sua propriedade
        </p>
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem'
        }}>
          {[
            { label: 'Nome da propriedade', value: data.farmName },
            { label: 'Responsável', value: data.ownerName },
            { label: 'Localização', value: data.location },
            data.experience && { label: 'Experiência', value: data.experience },
          ].filter(Boolean).map((row, i, arr) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '14px', padding: '8px 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'
            }}>
              <span style={{ color: '#666' }}>{row.label}</span>
              <span style={{ color: '#1a1a1a', fontWeight: '500', textAlign: 'right', maxWidth: '55%' }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Principais produtos */}
        {productList.length > 0 && (
          <>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#555', marginBottom: '0.75rem' }}>
              Principais produtos
            </p>
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {productList.map((produto, i) => (
                  <span key={i} style={{
                    backgroundColor: '#eaf3de', color: '#4CAF50',
                    fontSize: '13px', fontWeight: '500',
                    padding: '4px 14px', borderRadius: '20px'
                  }}>
                    {produto}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Contato */}
        <p style={{ fontSize: '14px', fontWeight: '600', color: '#555', marginBottom: '0.75rem' }}>
          Contato
        </p>
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '12px',
          padding: '1rem 1.25rem'
        }}>
          {[
            { label: 'E-mail', value: data.email },
            { label: 'Telefone', value: data.phone },
          ].map((row, i, arr) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '14px', padding: '8px 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'
            }}>
              <span style={{ color: '#666' }}>{row.label}</span>
              <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{row.value}</span>
            </div>
          ))}
          <button
            onClick={() => navigate('/produtores')}
            style={{
              marginTop: '1rem',
              padding: '8px 20px',
              backgroundColor: '#4CAF50',
              color: '#e8f5d0',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Editar cadastro
          </button>
        </div>

      </div>
    </div>
  )
}

export default HomepageProdutor
