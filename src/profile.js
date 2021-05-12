import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Input,Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import userdata from './userdata.json'
import {useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile(props) {
    // const [userdata , setUserData] = useState('')
    const [username , setUsername] =useState('')
    
    useEffect(()=>{
        props.userupdate(userdata.profile)
      },[])
    const users = props.userprofile.find((p) =>p.user.userid == props.match.params.id)
    const notify = () => toast("Profile Updated Sucessfully!");
    console.log(users)
    return (
        <div>
            {/* {props.userprofile.map(user =>{
                return user.user.name.first
            })} */}
           <Link to='/' className='btn btn-light my-3'>Go Back</Link>
           <Row> 
               <Col md={6}>
                <Card>  
                    <Image src={users.user.picture.large} fluid/>
    
                </Card> 
               </Col>
               <Col md={3}>
                 <lable>FirstName:</lable>
                 <input type='text'  value={users.user.name.first} onChange={e =>setUsername(e.target.value)} />
                <lable>LastName:</lable>
                <input type='text' value={users.user.name.last} onChange={e =>setUsername(e.target.value)}/><br/>
                <lable>Email:</lable><br/>
                <input type='email' value={users.user.email} onChange={e =>setUsername(e.target.value)}/><br/>
                <lable>Contact:</lable>
                <input type='text' value={users.user.contact} onChange={e =>setUsername(e.target.value)}/><br/>
                <lable>Joined Date:</lable>
                <input type='datetime' value={users.user.joindate} onChange={e =>setUsername(e.target.value)}/><br/>
                <Button style={{marginTop:'15px'}} onClick={notify} type='submit'>Submit</Button>
                <ToastContainer />
                </Col>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
