import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../component/data.json';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const ListingPage = () =>{
   
    
    const navigate = useNavigate();
    const goToPage = (item) => {
        // Use navigate. Pass the path as argument
        navigate('/Product', { state: { item } });
      };

      
    return(
        <div className="content">
            <Grid container spacing={5}> 
            {data.products.map((item,index)=>{
                return(
                    
                    <Grid key={index} item xs={5} md={3} sm={6}>
                    <div className="listing-container">
                    <img src={`${process.env.PUBLIC_URL}/${item.picture}`} alt={item.name} onClick={() => goToPage(item)} />
                    <div className='item-name'>{item.name}</div>
                    <div className='item-name'>RM {item.price}</div>
                    <div className='item-qty'>Quantity: {item.quantity}</div>
                    <Button  variant="contained" onClick={() => goToPage(item)}>Buy</Button>
                    </div>
                    </Grid>
                   
                )
            })}
             </Grid>
        </div>
    )

}
export default ListingPage;