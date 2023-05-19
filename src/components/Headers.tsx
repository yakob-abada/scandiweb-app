import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

const Headers = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    Product
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Headers;