import React, { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import ProductData from './Data'

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className='bg-dark w-50 mx-auto my-5 rounded text-white p-5'>
            {ProductData.map(item=>{
                if(item.id===parseFloat(id.replace(/[^0-9.-]+/g,""))) {
                    return <div key={id}>
                    <h2>Product {id}</h2>
                    <h3 className='my-3'>nam: {item.name}</h3>
                    <h4>price: {item.price}</h4> 
                 </div>
                }
            })}
            
            <button onClick={()=>navigate('/')} className='btn btn-outline-light mt-5'>Back to products</button>
            
        </div>
    )
    
  
}

export default ProductDetails