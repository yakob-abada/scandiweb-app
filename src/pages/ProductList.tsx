import axios from 'axios';
import React from 'react';
import ProductItem, { ProductType } from '../components/ProductItem';
import Button from 'react-bootstrap/Button';

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
            <>
                <Button className='spaceButton' href="/product-add">Add</Button>
                <div className='cardDeck'>
                    {this.state.items.map(item => <ProductItem key={item.sku} item={item}/>)}
                </div>
            </>
        )
    }
}

export default ProductList;