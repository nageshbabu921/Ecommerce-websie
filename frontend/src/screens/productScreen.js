import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,Card,Button,ListGroup}from 'react-bootstrap'
import Rating from '../components/Rating'

import axios from 'axios'

const productScreen = ({match}) => {
  const[] product,setProduct]=useState([])
  useEffect(()=>{
    const fetchProduct= async()=>{

      const {data}=await  axios.get((`/api/products/${params.id}`))
      setProduct(data)
    }
    fetchProduct()
  },[])
    return (
        <>
        <Link className='btn btn-light my-3' to ='/'>
          Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
            <ListGroup varient='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                price:${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description:{product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup varient ='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    price:
                    </Col>
                    <strong>
                      ${product.price}
                    </strong>

                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    status:
                    </Col>
                    <Col>
                     {product.countInStock>0? "Instock ": 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block' 
                  type='button'
                  disabled={product.countInStock===0}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
       </>
    )
}

export default productScreen
                  


