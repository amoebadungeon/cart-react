import React from "react";
import Selection from "../component/selection";
import {Provider} from 'react-redux';
import store from '../component/public/store';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
const ProductPage = () =>{
    const location = useLocation();
    const { item } = location.state || {};
    console.log(item)
    return(
        <div className="product-page">
             {/* <Grid container spacing={5}>  */}
             <Grid  item xs={12}  >
            <div className="product-container">
                <img src={`${process.env.PUBLIC_URL}/${item.picture}`} alt={item.name} />  
                <img src={`${process.env.PUBLIC_URL}/${item.picture1}`} alt={item.name} />  
                <img src={`${process.env.PUBLIC_URL}/${item.picture2}`} alt={item.name} />  
            </div>
            </Grid>
           
            <div className="product-name">{item.name}</div>
            <div className="product-desc">{item.desc}</div>
            <div className="product-price">{item.price}</div>
            <div className="product-qty">Quantity: {item.quantity}</div>
            
            <Provider store={store}>
                <Selection product={item}/>
            </Provider>
            
            {/* </Grid> */}
        </div>
    )

}

export default ProductPage