import React, { useEffect,useState} from 'react';

import Axios from 'axios'

import{random,commerce,company} from "faker" 

import {Container,Col, Row} from "reactstrap"
import CartItem from './CartItem';

const apiKey = "563492ad6f9170000100000141fb56b8159c4652adcaacda4712fe31"

const url = "https://api.pexels.com/v1/search/?query=laptop&per_page=6&page=1"

const BuyPage=({addInCart})=>{

    const [product, setProduct] = useState([])

    const fetchPhotos =async()=>{
        const {data} =await Axios.get(url,{
            headers:{
                Authorization: apiKey

            }
        }) 
        
        const {photos}=data;
 const allProduct=photos.map(photo=>({
    smallImage: photo.src.medium,
    tinyImage: photo.src.tiny,
    productName: company.companyName(),
    productPrice:commerce.price(),
    id:random.uuid()

}))

setProduct(allProduct)

    }
  
  useEffect(() => {
    fetchPhotos()
  }, [])



  return(
      <Container fluid>
          <h1 className="text-success text-center mb-5"> Buy Now </h1>
          <Row>
            {product.map(product=>(
                <Col md={4} key={product.id} >
                    <CartItem product={product} addInCart={addInCart}/>
                
                </Col>
            ))}
             
          </Row>
      </Container>
  )
}

export default BuyPage