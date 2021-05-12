import logo from './logo.svg';
import './App.css';
import userdata from './userdata.json'
// import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import Userprofile from './userprofile';
import { Container } from 'react-bootstrap';
import Profile from './profile';

function App(props) {

  useEffect(()=>{
    props.userupdate(userdata.profile)
  },[])


  
console.log(props.userprofile)

  return (
    <div>
      <BrowserRouter>
      <main classname="py-3">
      <Container>
        <Switch>
          <Route exact path='/' component={Userprofile} />
          <Route path='/user/:id' component={Profile}/>
          </Switch>
      </Container>
    </main>
      </BrowserRouter>
      </div>
   
  );
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
export default connect(mapStateToProps,mapDispatchToProps)(App);
