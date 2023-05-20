import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Headers from './components/Headers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductAdd from './pages/ProductAdd';
import axios from 'axios';

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <Headers />
      <Container >
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<ProductList />} />
              <Route path="product-add" element={<ProductAdd />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
