"use client"
import React from 'react'
import { notFound } from 'next/navigation';

function getRandomNumber(count:number){
  return Math.floor(Math.random() * count) + 1;
}

//This is an example of NEsted Dynamic routing
function ReviewId({params}:{
    params:{
        productid: string;
        reviewid: string;
    }
}) 
{
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error('Not Found'); //Simulating
  }

  if (parseInt(params.reviewid)>1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        {params.reviewid} Review for {params.productid} product 
      </h1>
    </div>
  )
}

export default ReviewId
