import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from'./Navbar';
import Test from './Test';
import bg from '../d1.jpg';


function AutoLayout() {
  return (
    <Container className='headercontainer' style = {{background:`url(${bg})`}}>
      <Row>
        <Col> <Navbar /> </Col>
        <Col> <Test /> </Col>
      </Row>
      <Row>
        
      </Row>
      </Container>
  );
}

export default AutoLayout;