import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Selection = ({product}) =>{
    const counter = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "RESET_COUNTER" });
        
    }, [product.id, dispatch]);

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
        payload: { id:product.id, name: product.name, quantity: counter, picture: product.picture , price:product.price }, })}>
           Add to Cart
        </button>

    </div>
    
    )

}

export default Selection;