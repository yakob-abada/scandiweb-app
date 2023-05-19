import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ProductForm extends React.Component {
    constructor (props: {}) {
        super(props);

        this.state = {
            sku: '',
            name: '',
            price: 0,
            type: ''
        }
    }

    handleSku(event: React.FormEvent<HTMLInputElement>) {
        this.setState({sku: event.currentTarget.value})
    }

    handleName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({name: event.currentTarget.value})
    }

    handlePrice(event: React.FormEvent<HTMLInputElement>) {
        this.setState({price: event.currentTarget.value})
    }

    handleType(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({type: event.currentTarget.value})
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // @todo add Axios
    }

    render() {
        return (
          <>
            <h2>Add product:</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicSkul">
                <Form.Label>Sku</Form.Label>
                <Form.Control type="string" placeholder="Enter sku" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" />
                <Form.Text className="text-muted">
                    Please notice the pirce are in $.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Type</option>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                </Form.Select>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </>
        );
    }
}

export default ProductForm;