import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FirstPage = () => {
    const tshirt = useLoaderData()
    console.log(tshirt)
  return (
    <div>
      <h3 className='ctr'>Home page</h3>
    </div>
  )
}

export default FirstPage
