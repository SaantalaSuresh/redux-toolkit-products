import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux';
import { addProduct,removeProduct } from '../store/cartSlice';
import Spinner from 'react-bootstrap/Spinner';


const Product = () => {
        const dispatch = useDispatch();

  const [products,setproducts] = useState([])

  useEffect(()=>{
    const getData= async()=>{
      const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    setproducts(products)
    }
    getData()
  },[])


    console.log(products)

  const addtoCart = (product)=>{
    dispatch(addProduct(product))
  }

  return (
    <div>
      <h1 className='text-center'>Product Dashboard</h1>
      <div style={{display:'flex' ,flexDirection:'row',justifyContent:'space-around' ,flexWrap:'wrap'}}>
        {products.length===0 ? <Spinner animation="border" variant="primary mt-5" />:products.map(product=>(
          <Card style={{ width: '18rem', marginTop:'17px', display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center', paddingTop:'10px'}} key={product.id}>
          <Card.Img variant="top" style={{width:'200px', height:'150px',marginTop:'20px', textAlign:'center', margin:'auto'}} src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.category}
            </Card.Text>
          
          </Card.Body>
           <div style={{display:'flex',justifyContent:'space-between' ,alignItems:'center', borderTop:'1px solid black' ,padding:'10px',backgroundColor:'#efefef', width:'100%'}}>
           <div>
           <Button variant="primary" onClick={()=>addtoCart(product)}>Add to Card</Button>
           </div>
           <p>$ {product.price}</p>
           </div>
        </Card>
        ))}
      </div>

    </div>
  )
}

export default Product