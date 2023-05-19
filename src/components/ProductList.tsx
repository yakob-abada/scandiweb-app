import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    constructor (props: {}) {
        super(props);
    }

    render () {
        return <ProductItem/>
    }
}

export default ProductList;