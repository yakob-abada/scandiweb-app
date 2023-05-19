import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProductType } from './ProductList';

type propsType = {
    item: ProductType
}

class ProductItem extends React.Component<propsType> {
    render () {
        const product = this.props.item;
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.sku}</Card.Subtitle>
                    <Card.Text>{product.price}</Card.Text>
                    {product.product_type == 'dvd' && (
                        <Card.Text>Size: {product.size} MB</Card.Text>
                    )}
                    {product.product_type == 'book' && (
                        <Card.Text>Weight: {product.weight} KG</Card.Text>
                    )}
                    {product.product_type == 'furniture' && (
                        <Card.Text>Dimension: {product.length} * {product.width} * {product.height}</Card.Text>
                    )}
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;