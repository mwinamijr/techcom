import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import products from './products'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
        <h1>Latest Products</h1>
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}> {product.name} </Col>
          ))}
          
        </Row>
        </Container>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
