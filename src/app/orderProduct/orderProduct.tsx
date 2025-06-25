"use client"
import React from 'react';
import { usePathname } from 'next/navigation';

const OrderProduct = () => {
    const handleClick =()=>{
        console.log("Click on place order button")
        return <p>Place order successfully</p>
    }
    return (
        <div>
            <h1>Click button below to Order Product</h1>
            <button onClick={handleClick}>Place Order</button>

        </div>
    );
}

export default OrderProduct;
