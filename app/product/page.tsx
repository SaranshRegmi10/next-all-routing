import React from 'react'
import Link from 'next/link'

function Productid() {
  const Productid = 100;
  return (
    <div>
      <h1>Product list</h1>
      <h2><Link href="./product/1">Product 1</Link></h2>
      <h2><Link href="./product/2">Product 2</Link></h2>
      
      <h2><Link href={`./product/${Productid}`}>Product {Productid}</Link></h2>
    </div>
  )
}

export default Productid
