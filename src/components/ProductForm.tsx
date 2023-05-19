import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type ProductSate = {
    sku: string,
    name: string,
    price: number,
    type: string,
    size: number,
    weight: number,
    length: number,
    height: number,
    width: number
}

class ProductForm extends React.Component<{}, ProductSate> {
    constructor (props: {}) {
        super(props);

        this.state = {
            sku: '',
            name: '',
            price: 0,
            type: '',
            size: 0,
            weight: 0,
            length: 0,
            height: 0,
            width: 0
        }

        this.handleSku = this.handleSku.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleLength = this.handleLength.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        this.handleWidth = this.handleWidth.bind(this);
    }

    handleSku(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({sku: event.currentTarget.value})
    }

    handleName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.currentTarget.value})
    }

    handlePrice(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({price: parseInt(event.currentTarget.value)})
    }

    handleType(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({type: event.currentTarget.value})
    }

    handleSize(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({size: parseInt(event.currentTarget.value)})
    }

    handleWeight(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({weight: parseInt(event.currentTarget.value)})
    }

    handleLength(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({length: parseInt(event.currentTarget.value)})
    }

    handleHeight(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({height: parseInt(event.currentTarget.value)})
    }

    handleWidth(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({width: parseInt(event.currentTarget.value)})
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // @todo add Axios
    }

    render() {
        return (
          <>
            <h2>Add product: {this.state.type}</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicSkul">
                    <Form.Label>Sku</Form.Label>
                    <Form.Control type="string" placeholder="Enter sku" onChange={this.handleSku} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" placeholder="Enter name" onChange={this.handleName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" onChange={this.handlePrice} />
                    <Form.Text className="text-muted">
                        Please notice the pirce are in $.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={this.handleType}>
                        <option>Type</option>
                        <option value="book">Book</option>
                        <option value="dvd">DVD</option>
                        <option value="furniture">Furniture</option>
                    </Form.Select>
                </Form.Group>
                {this.state.type == 'dvd' && (
                    <Form.Group className="mb-3" controlId="formBasicSize">
                        <Form.Label>Size</Form.Label>
                        <Form.Control type="number" placeholder="Enter size" />
                        <Form.Text className="text-muted">
                            Please notice the size are in MB.
                        </Form.Text>
                    </Form.Group>
                )}
                {this.state.type == 'book' && (
                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" placeholder="Enter weight" />
                        <Form.Text className="text-muted">
                            Please notice the weight are in KG.
                        </Form.Text>
                    </Form.Group>
                )}
                {this.state.type == 'furniture' && (
                    <>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" placeholder="Enter height" />
                            <Form.Text className="text-muted">
                                Please notice the height are in CM.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLength">
                            <Form.Label>Length</Form.Label>
                            <Form.Control type="number" placeholder="Enter length" />
                            <Form.Text className="text-muted">
                                Please notice the length are in CM.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicWidth">
                            <Form.Label>Width</Form.Label>
                            <Form.Control type="number" placeholder="Enter width" />
                            <Form.Text className="text-muted">
                                Please notice the width are in KG.
                            </Form.Text>
                        </Form.Group>
                    </>
                )}
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </>
        );
    }
}

export default ProductForm;