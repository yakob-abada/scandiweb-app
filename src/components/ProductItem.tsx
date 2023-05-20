import React from 'react';
import Card from 'react-bootstrap/Card';

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

type propsType = {
    item: ProductType
}

class ProductItem extends React.Component<propsType> {
    render () {
        const product = this.props.item;
        return (
            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{product.sku}</Card.Subtitle>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}$</Card.Text>
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