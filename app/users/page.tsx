import React from 'react'
interface user {
    id : number,
    name: string,
    phone: number,
    email:string,
    address:string,
}

const page = async() => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users : user[] = await resp.json();

  return (
    <div>
        <h1>Fetching of data</h1>

        <div className='p-6 '>
        <ul>
            {users.map(users=><li key={users.id}>Name:{users.name}</li>)}
            <br />
            {users.map(users=><p key={users.id}>Email:{users.email}</p>)}
            <br />
            {/* {users.map(users=><p key={users.id}>Address:{users.address.zipcode}</p>)} */}
            <br />
            {users.map(users=><p key={users.id}>Phone:{users.phone}</p>)}
        </ul>
        </div>
    </div>
  )
}

export default page
