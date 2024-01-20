import React from 'react'

function docs({params}:{
    params:{
        slug: string[];
    }
}) {
    if (params.slug.length === 2) {
  return (
        <div>
          <h1>Viewing Doc for {params.slug[0]} and concept for Doc {params.slug[1]}</h1>
        </div>
  )
}
else if(params.slug.length === 1){
    return(
        <div>
            <h1>
            Viewing Doc for {params.slug[0]} 
            </h1>
        </div>
    )
}
   else{
    return null;
   } 
}

export default docs
