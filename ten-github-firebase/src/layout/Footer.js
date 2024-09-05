import React from 'react';

import {Container} from 'reactstrap'

const Footer=()=>{
    return(
        <Container
       
        fluid
        tag="footer"
        className="text-center bg-info text-white footer text-uppercase mt-5 p-3"
        style={{ height:"70px" }}>
           LCO Github search app with firebase
           
        </Container>
    )
}

export default Footer;