import React, { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import Product from './Product'
import NewItem from './NewItem'
import ProductData from './Data'
import { useNavigate } from 'react-router-dom';



const ProductsItems = () => {
    const [value,setValue] = useState('')
    const [products,setProducts] = useState(ProductData)
    const [product,setProduct] = useState({})

    const navigate = useNavigate()

    const AddNewItem = (product)=>{
        setProducts([...products,product])
    }
    const filterData = (value)=> {
       setValue(value)
       const filtredData = ProductData.filter(item=>{
        return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
       })
       setProducts(filtredData)
    }
  return (
    <div className=''>
        <Container>
        <NewItem item={setProduct} setItems={AddNewItem} ID ={ProductData.length}/>
            <div className="product-controls d-flex">
                <input type="text" className='form-control d-block' placeholder='serch for products' onChange={(e)=>filterData(e.target.value)} value={value}/>
            </div>
            <div className='product-items text-center my-5'>
                <h2 className='mb-3'>Products</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {products.map(product=>{
                                return <Product data={product} key={product.id}/>
                        })}
                    </tbody>
                </Table>
               
            </div>
           
        </Container>

    </div>
  )
}

export default ProductsItems