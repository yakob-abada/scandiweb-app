import axios from 'axios';
import React from 'react';
import ProductItem from './ProductItem';
import Card from 'react-bootstrap/Card';
import { wrap } from 'module';

export type ProductType = {
    sku: string,
    name: string,
    price: number,
    product_type: string,
    size: number,
    weight: number,
    height: number,
    length: number,
    width: number
}

type stateType = {
    items: ProductType[]
}

class ProductList extends React.Component<{}, stateType> {
    constructor (props: {}) {
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount(): Promise<void> {
        const result = await axios.get(`http://127.0.0.1:8000/product/all`);
        this.setState({ items: result.data });
    }

    render () {
        return (
            <div className='cardDeck'>
                {this.state.items.map(item => <ProductItem item={item}/>)}
            </div>
        )
    }
}

export default ProductList;