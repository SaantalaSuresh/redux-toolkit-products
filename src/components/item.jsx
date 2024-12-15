import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice';

const EachProduct = (props) => {
    const {id} = useParams()
    const dispatch = useDispatch()

    
    console.log(id)
    const [product, setProduct] = useState(null);
    
useEffect(()=>{
    const getData = async()=>{
       const response = await fetch(`https://fakestoreapi.com/products/${id}`)
       const data = await response.json()
       setProduct(data)

    }
    getData()

},[])
console.log(product)

    

    return (
        <div className='d-flex justify-content-center m-4'> 
            {!product ?  <Spinner animation="border" variant="primary mt-5" />:<Card style={{ width: '80vw', marginTop:'17px', display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center', paddingTop:'10px'}} key={product.id}>
          <Card.Img variant="top" style={{maxWidth:'400px', maxHeight:'300px',marginTop:'20px', textAlign:'center', margin:'auto'}} src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <span className='text-dar'><b>Desription</b></span> : {product.description}
            </Card.Text>
            <Card.Subtitle>
                Category: {product.category}
            </Card.Subtitle>
          
          </Card.Body>
           <div style={{display:'flex',justifyContent:'space-between' ,alignItems:'center', borderTop:'1px solid black' ,padding:'10px',backgroundColor:'#efefef', width:'100%'}}>
           <div>
           <Button variant="primary" onClick={()=>dispatch(addProduct(product))}>Add to Card</Button>
           </div>
           <p>$ {product.price}</p>
           </div>
        </Card>  }
           
        </div>
    );
};

export default EachProduct;
