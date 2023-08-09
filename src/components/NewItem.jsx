import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const NewItem = (probs) => {
    const [product,setProduct] = useState({});
    const [name,setName] =useState('')
    const [price,setPrice]=useState('')
    const [Id,setId] = useState(probs.ID +1)
    const navigate = useNavigate()

    useEffect(()=>{
      setProduct({...product,id:Id,name:name,price:price})
    },[name,price])

const addNew = (e)=>{
  if(product.name!=='' || product.price!=='') {
    e.preventDefault()
    probs.item(product)
    probs.setItems(product)
    setId(Id+1)
    navigate('/')
  }
    
}
  return (
    <div className="container my-3">
      <div className="form-control bg-light p-4">
        <h4 className='mb-3 text-center'>Add New Product</h4>
        <input type="text" placeholder='Enter Product Name'  className='form-control mb-3' onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder='Enter Product Price' className='form-control mb-3' onChange={(e)=>{setPrice(e.target.value)}}/>
        <button onClick={addNew} className='btn btn-dark'>Add</button>
      </div>
      
       
    </div>
  )
}

export default NewItem