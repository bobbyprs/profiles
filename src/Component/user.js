import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function User({user}) {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Link to={`/user/${user.user.userid}`}>
                    <Card.Img src={user.user.picture.medium}/>
                
                </Link>
                <Card.Body>
                <Link to={`/user/${user.user.userid}`}>
                    <Card.Title >
                        <strong>{user.user.name.first}</strong>
                    </Card.Title>
                </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default User
