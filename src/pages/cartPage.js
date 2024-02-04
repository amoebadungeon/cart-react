import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

const CartPage = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
// localStorage.clear()
    const incrementItemQuantity = (id) => {
        dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { id } });
    };

    const decrementItemQuantity = (id) => {
        dispatch({ type: "DECREMENT_ITEM_QUANTITY", payload: { id } });
    };

    // Calculate the total price
    const totalPrice = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className='cart-page'>
            {items.length === 0 ? (
                <div className='empty-cart'><img src={`${process.env.PUBLIC_URL}/picture/empty-cart.png`} alt='empty-cart' /></div>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <div className='cart-item'>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div className='cart-pic'><img src={`${process.env.PUBLIC_URL}/${item.picture}`} alt={item.name} /></div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className='cart-name'>{item.name}</div>
                                        <div className='cart-qty'>Quantity: {item.quantity}</div>
                                        <div className='cart-price'>RM {parseFloat(item.price).toFixed(2)}</div>

                                    </Grid>
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
            <div className='total-price'>Total Price: RM {parseFloat(totalPrice.toFixed(2))}</div> {/* Display the total price */}
            <button className="button-54">Checkout</button>
        </div>
    );
};

export default CartPage;
