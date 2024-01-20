"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const Orderplacement = () => {
    const router = useRouter();
    const handlebuttom = () => {
        console.log("Order is placed");
        router.push("/");
        // router.replace(url) If you want to replace the history then use
        // router.back(); if you want to navigate back to the before page then use
    }
    return (
        <div>
            <h1>Order Placement</h1>
            <button onClick={handlebuttom}>Place Order</button>
        </div>
    )
}
export default Orderplacement
