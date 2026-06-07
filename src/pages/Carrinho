import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
  const navigate = useNavigate()
  const [carrinho, setCarrinho] = useState([])
  const [comprador, setComprador] = useState(null)

  useEffect(() => {
    const carrinhoSalvo = sessionStorage.getItem('carrinho')
    const compradorSalvo = sessionStorage.getItem('compradorData')
    if (carrinhoSalvo) setCarrinho(JSON.parse(carrinhoSalvo))
    if (compradorSalvo) setComprador(JSON.parse(compradorSalvo))
  }, [])

  const alterarQuantidade = (id, delta) => {
    const novoCarrinho = carrinho
      .map(p => p.id === id ? { ...p, quantidade: p.quantidade + delta } : p)
      .filter(p => p.quantidade > 0)
    setCarrinho(novoCarrinho)
    sessionStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
  }

  const remover = (id) => {
    const novoCarrinho = carrinho.filter(p => p.id !== id)
    setCarrinho(novoCarrinho)
    sessionStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
  }

  const total = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0)

  return (
    <div style={{ backgroundColor: '#f4f1eb', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Cabeçalho */}
        <div style={{
          backgroundColor: '#2d5016', borderRadius: '12px',
          padding: '1.25rem 1.75rem', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', marginBottom: '1.75rem'
        }}>
          <div>
            <p style={{ margin: '0 0 2px', fontSize: '18px', fontWeight: '600', color: '#e8f5d0' }}>
              🛒 Meu Carrinho
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#a3c46a' }}>
              {comprador ? comprador.name : ''}
            </p>
          </div>
          <button
            onClick={() => navigate('/produtos-comprador')}
            style={{
              backgroundColor: 'transparent', color: '#a3c46a',
              border: '1px solid #a3c46a', borderRadius: '8px',
              padding: '7px 16px', fontSize: '13px', fontWeight: '500', cursor: 'pointer'
            }}
          >
            ← Continuar comprando
          </button>
        </div>

        {carrinho.length === 0 ? (
          <div style={{
            backgroundColor: '#fff', borderRadius: '12px',
            padding: '3rem', textAlign: 'center',
            border: '1px solid rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
            <p style={{ color: '#888', fontSize: '15px' }}>Seu carrinho está vazio.</p>
            <button
              onClick={() => navigate('/produtos-comprador')}
              style={{
                marginTop: '1rem', padding: '8px 20px',
                backgroundColor: '#2d5016', color: '#e8f5d0',
                border: 'none', borderRadius: '8px',
                fontSize: '13px', fontWeight: '500', cursor: 'pointer'
              }}
            >
              Ver produtos
            </button>
          </div>
        ) : (
          <>
            {/* Lista de itens */}
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#555', marginBottom: '0.75rem' }}>
              Itens selecionados
            </p>
            <div style={{
              backgroundColor: '#fff', borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.08)', marginBottom: '1.25rem', overflow: 'hidden'
            }}>
              {carrinho.map((item, i) => (
                <div key={item.id} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px 1.25rem',
                  borderBottom: i < carrinho.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'
                }}>
                  <span style={{ fontSize: '1.75rem' }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                      {item.nome}
                    </p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{item.fazenda}</p>
                  </div>

                  {/* Controle de quantidade */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => alterarQuantidade(item.id, -1)}
                      style={{
                        width: '26px', height: '26px', borderRadius: '50%',
                        border: '1px solid #ddd', backgroundColor: '#fff',
                        fontSize: '16px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', color: '#555'
                      }}
                    >−</button>
                    <span style={{ fontSize: '14px', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>
                      {item.quantidade}
                    </span>
                    <button
                      onClick={() => alterarQuantidade(item.id, 1)}
                      style={{
                        width: '26px', height: '26px', borderRadius: '50%',
                        border: '1px solid #ddd', backgroundColor: '#fff',
                        fontSize: '16px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', color: '#555'
                      }}
                    >+</button>
                  </div>

                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#3B6D11', minWidth: '60px', textAlign: 'right' }}>
                    R$ {(item.preco * item.quantidade).toFixed(2)}
                  </p>

                  <button
                    onClick={() => remover(item.id)}
                    style={{
                      background: 'none', border: 'none',
                      color: '#ccc', cursor: 'pointer', fontSize: '16px', padding: '0 4px'
                    }}
                  >✕</button>
                </div>
              ))}
            </div>

            {/* Resumo do total */}
            <div style={{
              backgroundColor: '#fff', borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.08)', padding: '1rem 1.25rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                <span style={{ color: '#666' }}>Subtotal ({carrinho.reduce((a, p) => a + p.quantidade, 0)} itens)</span>
                <span style={{ fontWeight: '600', color: '#1a1a1a' }}>R$ {total.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', paddingTop: '8px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ color: '#666' }}>Entrega</span>
                <span style={{ color: '#3B6D11', fontWeight: '500' }}>A combinar com o produtor</span>
              </div>
              <button
                style={{
                  marginTop: '1rem', width: '100%', padding: '12px',
                  backgroundColor: '#2d5016', color: '#e8f5d0',
                  border: 'none', borderRadius: '8px',
                  fontSize: '15px', fontWeight: '600', cursor: 'pointer'
                }}
              >
                Finalizar pedido
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Carrinho
