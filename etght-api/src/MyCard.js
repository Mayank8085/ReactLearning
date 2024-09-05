import React from 'react';

import {
    Card,CardBody,CardTitle,CardText
} from 'reactstrap'

import {FaMapMarkedAlt,FaEnvelope,FaPhone} from 'react-icons/fa';

const MyCard=({details})=>{
    return(
        <Card>
            <CardBody className="text-center">
                <img 
                height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large} alt=""/>
                <CardTitle className="text-primary">
                    <h1>
                        <span className ="pr-2">{details.name?.title}</span>
                        <span className ="pr-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt className ="pr-2"/>
                    {details.location?.city}
                    <FaPhone className ="pl-2 "/>
                    {details.phone}
                </CardText>

            </CardBody>
        </Card>
    )

}
export default MyCard