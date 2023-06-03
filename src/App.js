import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components';
import NavBar from './components/NavBar';
import { Checkout } from './components';
import SearchResults from './components/SearchResults';
import { ProductPage } from './components';
import Signin from './components/auth/Manage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
