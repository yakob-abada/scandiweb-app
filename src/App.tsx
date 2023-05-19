import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm';
import Container from 'react-bootstrap/Container';
import ProductList from './components/ProductList';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Headers from './components/Headers';

function App() {
  return (
    <div className="App">
      <Headers />
      <Container >
        <Tabs
          defaultActiveKey="list"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="list" title="List">
            <ProductList />
          </Tab>
          <Tab eventKey="add" title="Add">
            <ProductForm />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
