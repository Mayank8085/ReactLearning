import React from 'react'

import {
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    Button

} from 'reactstrap'


const CartItem=({product, addInCart})=>{
    return(
        <Card className="my-3 px-2 py-4">
            <CardImg
            top
            height="250"
            width="100%"
            src={product.smallImage} />
            <CardTitle className="text-center">{product.productName}</CardTitle>
            <CardText className="secondary text-center"> price: ${product.productPrice}</CardText>
            <Button color="success" className="mr-5 ml-5"
            onClick={()=>addInCart(product)} >Add To Card</Button>

          

        </Card>
    )

}

export default CartItem