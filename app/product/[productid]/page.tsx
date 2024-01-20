import React from 'react'
import { Metadata } from 'next';

type Props = {
  params: {
    productid: string;
  };
};

export const generateMetadata = ({params}:Props): Metadata =>{
  return{
    title : `Product ${params.productid}`
  }
}

function Productdetails(
  { params }: Props
) {
  return (
    <div>
      <p>Product Number {params.productid}</p>
    </div>
  )
}

export default Productdetails
