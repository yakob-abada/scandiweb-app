import React from 'react';
import Card from 'react-bootstrap/Card';

class ProductItem extends React.Component {
    render () {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;