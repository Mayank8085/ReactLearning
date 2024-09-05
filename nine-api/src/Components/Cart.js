import React from 'react';

import {Container,
ListGroup,ListGroupItem,
Button,
Card,
CardBody,
CardHeader,
CardFooter,
Col,
Row} from "reactstrap"

const Cart = ({cardItem, removeItem, buyNow})=>{
    let amount=0;
    cardItem.forEach(item=>{
        amount=parseFloat(amount)+parseFloat(item.productPrice)

    })

    return(
        <Container fluid>
            <h1 className="text-success mb-5" > Your Cart</h1>
            <ListGroup>
                {cardItem.map(item=>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height={80}
                                src={item.tinyImage} />
                            </Col>
                            <Col className="text-center" >
                                <div className="text-primary">
                                {item.productName}
                                </div>
                                <span>price :- {item.productPrice}</span>

                               
                                
                            </Col>
                            <Col className="text-right">
                                
                            <Button color="danger"  onClick={()=>removeItem(item)} >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* If everything is empty */}
            {
                cardItem.length >= 1 ? (<Card className="text-center mt-3">
                    <CardHeader>
                        Grand Total 
                    </CardHeader>
                    <CardBody> Your amount for {cardItem.length} product is {amount}</CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow} >Pay Here</Button>
                    </CardFooter>

                </Card>):(<h1 className="text-warning"> Cart is empty</h1>)
                
            }

        </Container>
    )

}
export default Cart