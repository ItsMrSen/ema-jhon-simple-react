import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts] = useState(first10);
    const[cart, setCart] = useState([]);
    const productHandler = (products) =>{
        console.log('product add', products);
        const newCart = [...cart, products]
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {/* <h4>Total products :{products.length}</h4> */}
                {
                    products.map(items => <Product 
                        productHandler = {productHandler}
                        products={items}></Product>)
                }
            </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;