import '../styles/ProductList.scss';
import React from 'react';
import ProductItem, { ProductType } from '../components/ProductItem';
import Button from 'react-bootstrap/Button';
import ProductService from '../serices/ProductService';

type stateType = {
    items: ProductType[],
    deletedItems: string[]
}

class ProductList extends React.Component<{}, stateType> {
    constructor (props: {}) {
        super(props);
        this.state = {
            items: [],
            deletedItems: []
        }

        this.deleteProducts = this.deleteProducts.bind(this)
    }

    async componentDidMount(): Promise<void> {
        const productService = new ProductService();
        const items = await productService.getAll();

        this.setState({ items });
    }

    async deleteProducts() {
        const productService = new ProductService();
        await productService.deleteBulk(this.state.deletedItems);

        this.setState((state, props) => {
            let prevItems = state.items
            const prevDeletedItem = state.deletedItems
            
            for (const item of prevItems) {
                if (prevDeletedItem.includes(item.sku ?? '')) {
                    prevItems = prevItems.filter(prevItem => prevItem.sku !== item.sku)
                }
            }

            return {items: prevItems}
        })
    }

    handleCallback = (id: string, isChecked: boolean) => {
        this.setState((state, props) => {
            let prevDeletedItem = state.deletedItems;

            if (!prevDeletedItem.includes(id) && isChecked) {
                prevDeletedItem.push(id)
            }

            if (prevDeletedItem.includes(id) && !isChecked) {
                prevDeletedItem = prevDeletedItem.filter(num => num !== id)
            }

            return {deletedItems: prevDeletedItem}
        })
    }

    render () {
        return (
            <>
                <Button className='space-button space-right' href="/product-add">ADD</Button>
                <Button className='space-button' onClick={this.deleteProducts}>MASS DELETE</Button>
                <div className='cardDeck'>
                    {this.state.items.map(item => <ProductItem key={item.sku} item={item} handleCallback={this.handleCallback}/>)}
                </div>
            </>
        )
    }
}

export default ProductList;