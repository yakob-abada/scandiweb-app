import Alert from 'react-bootstrap/Alert';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductType } from '../components/ProductItem';
import ProductService from '../serices/ProductService';
import BadRequestError from '../serices/BadRequestError';

type stateType = {
    product: ProductType
    errorMessages: string[]
}

class ProductAdd extends React.Component<any, stateType> {
    constructor (props: {}) {
        super(props);

        this.state = {
            product: {
                sku: null,
                name: null,
                price: null,
                product_type: null,
                size: null,
                weight: null,
                length: null,
                height: null,
                width: null
            },
            errorMessages: []
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSku(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        this.setState(state => {
            state.product.sku = value
            return state;
        })
    }

    handleName(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        this.setState(state => {
            state.product.name = value
            return state;
        })
    }

    handlePrice(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.price = value
            return state;
        })
    }

    handleType(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.currentTarget.value;
        this.setState(state => {
            state.product.product_type = value
            return state;
        })
    }

    handleSize(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.size = value
            return state;
        })
    }

    handleWeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.weight = value
            return state;
        })
    }

    handleLength(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.length = value
            return state;
        })
    }

    handleHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.height = value
            return state;
        })
    }

    handleWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value);
        this.setState(state => {
            state.product.width = value
            return state;
        })
    }

    async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const product = this.state.product; 
        
        const productService = new ProductService();
        try {
            const result = await productService.save(product);
        } catch (e) {
            if (e instanceof BadRequestError) {
                this.setState({errorMessages: e.message.split(',')})
                return;
            }
        }

        return  window.location.replace("/");
    }

    render() {
        const product = this.state.product
        return (
          <>
            <h2>Add product:</h2>
            {this.state.errorMessages.length > 0 && (
            <Alert key="danger" variant="danger">
                <ul>
                    {this.state.errorMessages.map((errorMessage, key) => <li key={key}>{errorMessage}</li>)}
                </ul>
            </Alert>
            )}
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicSkul">
                    <Form.Label>Sku</Form.Label>
                    <Form.Control type="string" placeholder="Enter sku" onChange={this.handleSku} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" placeholder="Enter name" onChange={this.handleName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" onChange={this.handlePrice} />
                    <Form.Text className="text-muted">
                        Please notice the pirce are in $.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={this.handleType}>
                        <option>Type</option>
                        <option value="book">Book</option>
                        <option value="dvd">DVD</option>
                        <option value="furniture">Furniture</option>
                    </Form.Select>
                </Form.Group>
                {product.product_type == 'dvd' && (
                    <Form.Group className="mb-3" controlId="formBasicSize">
                        <Form.Label>Size</Form.Label>
                        <Form.Control type="number" placeholder="Enter size" onChange={this.handleSize} />
                        <Form.Text className="text-muted">
                            Please notice the size are in MB.
                        </Form.Text>
                    </Form.Group>
                )}
                {product.product_type == 'book' && (
                    <Form.Group className="mb-3" controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" placeholder="Enter weight" onChange={this.handleWeight} />
                        <Form.Text className="text-muted">
                            Please notice the weight are in KG.
                        </Form.Text>
                    </Form.Group>
                )}
                {product.product_type == 'furniture' && (
                    <>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" placeholder="Enter height" onChange={this.handleHeight} />
                            <Form.Text className="text-muted">
                                Please notice the height are in CM.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLength">
                            <Form.Label>Length</Form.Label>
                            <Form.Control type="number" placeholder="Enter length" onChange={this.handleLength} />
                            <Form.Text className="text-muted">
                                Please notice the length are in CM.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicWidth">
                            <Form.Label>Width</Form.Label>
                            <Form.Control type="number" placeholder="Enter width" onChange={this.handleWidth} />
                            <Form.Text className="text-muted">
                                Please notice the width are in KG.
                            </Form.Text>
                        </Form.Group>
                    </>
                )}
                <Button className='space-right' variant="primary" type="submit">Submit</Button>
                <Button variant="danger" href="/">Cancel</Button>
            </Form>
          </>
        );
    }
}

export default ProductAdd;