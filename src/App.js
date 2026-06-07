import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Producers from './pages/Producers'
import BuyerRegister from './pages/BuyerRegister'
import HomeProdutor from './pages/HomeProdutor'
import Carrinho from './pages/Carrinho'
import ProdutosComprador from './pages/ProdutosComprador'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/produtores" element={<Producers />} />
            <Route path="/cadastro-comprador" element={<BuyerRegister />} />
            <Route path="/home-produtor" element={<HomeProdutor />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/produtos-comprador" element={<ProdutosComprador />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
