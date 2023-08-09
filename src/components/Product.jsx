import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import ProductData from './Data'

const Product = (probs) => {
const {id,name,price} = probs.data;
const navigate = useNavigate()
  return (
    
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td><button className='border-0 text-white bg-dark rounded-circle' onClick={()=>navigate(`${'/productDeatails'}/:${id}`)}><FontAwesomeIcon icon={faEye}/></button></td>
        </tr>
         
    );
}
      

export default Product