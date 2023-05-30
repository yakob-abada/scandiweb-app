import React from 'react';
import Card from 'react-bootstrap/Card';

export type ProductType = {
    sku: string | null,
    name: string | null,
    price?: number | null,
    product_type: string | null,
    size: number | null,
    weight: number | null,
    height: number | null,
    length: number | null,
    width: number | null
}

type propsType = {
    item: ProductType,
    handleCallback: (id: string, isChecked: boolean) => void
}

class ProductItem extends React.Component<propsType> {
    constructor (props: propsType) {
        super(props);

        this.handleIsChecked = this.handleIsChecked.bind(this)
    }
    handleIsChecked(e: any) {
        const checked = e.target.checked;
        const checkedValue = e.target.value;

        this.props.handleCallback(checkedValue, checked);
    }
    render () {
        const product = this.props.item;
        return (
            <Card>
                <Card.Body>
                    <div className="cardCheckBox">
                        <input type="checkbox" name={product.sku ?? undefined} onClick={this.handleIsChecked} value={product.sku ?? ''}/>
                    </div>
                    
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
                        <Card.Text>Dimension: {product.length} * {product.width} * {product.height} CM</Card.Text>
                    )}
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;