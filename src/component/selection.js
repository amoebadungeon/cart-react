import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const Selection = ({product}) =>{
    console.log("babi",product.name)
    const counter = useSelector((state)=>state.counter.value);
    // const items = useSelector((state)=>state.cart.items);
    const dispatch = useDispatch();

    return(
        <div className="quantity-box">
        
        <button className="quantity-btn increment-btn" onClick={() => dispatch({ type: "INCREMENT" })}>
            +
        </button>
        <div className="quantity-display"> {counter === 0 ? '0' : counter}</div>
        <button className="quantity-btn decrement-btn" onClick={() => dispatch({ type: "REDUCTION" })}>
            -
        </button>
        <button className="add-to-cart" 
        onClick={() => dispatch({ type: "ADD_TO_CART", 
        payload: { id:product.id, name: product.name, quantity: counter, picture: product.picture }, })}>
           Add to Cart
        </button>

    </div>
    
    )

}

export default Selection;