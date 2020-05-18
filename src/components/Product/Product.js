import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.products)
    const { name, img, seller, price, stock } = props.products;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small>only {stock} left in the stock!! HURRY</small></p>
                <br/>
                <button className="cart" onClick={() => props.productHandler(props.products)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                      add to cart
                     </button>
            </div>
        </div>
    );
};

export default Product;