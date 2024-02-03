import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

const CartPage = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    // localStorage.clear();
    const incrementItemQuantity = (id) => {
        dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { id } });
    };

    const decrementItemQuantity = (id) => {
        dispatch({ type: "DECREMENT_ITEM_QUANTITY", payload: { id } });
    };

    return (
        <div className='cart-page'>
            {items.length === 0 ? (
                <div className='empty-cart'><img src={`${process.env.PUBLIC_URL}/picture/empty-cart.png`}  alt='empty-cart'  /></div>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <div className='cart-item'>
                                <Grid item xs={6}>
                                    <div className='cart-pic'><img src={`${process.env.PUBLIC_URL}/${item.picture}`}  alt={item.name} /></div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className='cart-name'>{item.name}</div>
                                    <div className='cart-qty'>Quantity: {item.quantity}</div>
                                </Grid>
                                <div className="quantity-box">
                                    <button className="quantity-btn increment-btn" onClick={() => incrementItemQuantity(item.id)}>
                                        +
                                    </button>
                                    <div className="quantity-display">{item.quantity}</div>
                                    <button className="quantity-btn decrement-btn" onClick={() => decrementItemQuantity(item.id)}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        <button class="button-54" >Checkout</button>

        </div>
    );
};

export default CartPage;
