import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const products = useSelector(state => state.cart)
    console.log(products)
    const dispatch = useDispatch()

    const removeFromCart = (product)=>{
        dispatch(removeProduct(product))


    }

  return (
    <div>
        <h1 className='text-center'>Cart</h1>
        <div className="container">
            <div className="row">
                {products.length ===0 ? <div>
                    <h2 className='text-center mt-5'>Your cart is empty</h2>
                </div> : <div style={{display:'flex' ,flexDirection:'row',justifyContent:'space-around' ,flexWrap:'wrap'}}>
                    {products.map((product, index) => (
   <Link to={`/products/${product.id}`} style={{textDecoration:'none'}}>
  
  <Card
    key={product.id ? product.id : `product-${index}`}
    style={{ width: '18rem', marginTop: '17px', textAlign:'center', margin:'auto'}}
  >
    <Card.Img
      variant="top"
      style={{ width: '200px', height: '150px', marginTop: '20px', margin:' 10px auto'}}
      src={product.image}
    />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.category}</Card.Text>
    </Card.Body>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid black',
        padding: '10px',
        backgroundColor: '#efefef',
      }}
    >
      <Button variant="danger" onClick={() => removeFromCart(product.id)}>
        Remove From Cart
      </Button>
      <p>$ {product.price}</p>
    </div>
  </Card>
  </Link>
))}

        
      </div>}
            </div>
        </div>
    </div>
  )
}

export default Cart