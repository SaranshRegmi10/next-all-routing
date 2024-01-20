import React from 'react'
import Link from 'next/link'
const file1 = () => {
  return (
    <div>
        <h1>F1</h1>
        <Link href='./f1/f2'>F2</Link>
        <Link href='./f1/f3'>F3</Link>
        <Link href='./product'>Product</Link>
    </div>
  )
}

export default file1