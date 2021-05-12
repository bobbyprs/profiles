import React from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap'
import User from '../src/Component/user'
import userdata from './userdata.json'
import {useEffect,useState} from 'react';
import {connect} from 'react-redux';

function Userprofile(props) {
    useEffect(()=>{
        props.userupdate(userdata.profile)
      },[])

    return (
        <div>
            <Row>
                <h1> User List</h1>
            {props.userprofile.map((user) =>
                (
                   

                     <Col key={user.user.userid} sm={12} md={6} lg={4} xl={3}>
                     {/* <h3>{user.user.userid}:  {user.user.name.first}</h3>   */}
                     <User user={user}/> 
                     </Col> 
                        
                  
                   
                )
            )}
            </Row>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
      userprofile:state.userprofile
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
      userupdate(val){
        dispatch({
          type:'INIT_UPDATE',
          payload:val,
        })
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Userprofile);
