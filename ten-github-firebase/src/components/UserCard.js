import React from 'react';
import { Card, CardBody } from 'reactstrap';

const UserCard=({user})=>{

    return(
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"></img>
            <CardBody>
                <div className="text-primary">{user.login}</div>
                <div className="text-secondary">{user.location}</div>
                <div className="text-secondary">{user.email}</div>
                <div className="text-danger">{user.name}</div>

                <div className="text-error">{user.bio}</div>
                <div className="text-primary">Available for hire : {user.hireable? "Yes":"No" }</div>
                <div className="text-primary">Followers :{user.followers}</div>

            </CardBody>
 
        </Card>
    )

}

export default UserCard