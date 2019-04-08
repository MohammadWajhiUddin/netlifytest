import React ,{Component} from 'react'
import {Form,Image} from 'react-bootstrap';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom'
import SignUp from '../components/SignUp'
import LoginPage from '../components/LoginPage'

import './Login.css'
export default class Login extends Component {
    render(){
        return(
            <Router>
         <div className="Login">

         
            <div className="Login__Aside">
            <Image src="assets/b2.jpg" className="headerimage" />
            </div>
            <div className="Login__Form">


             <div className="PageSwitcher">
                <NavLink  to="/sign-in"  activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
                 Sign In
                 </NavLink>


                 <NavLink exact to="/"   activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item " >
                 Sign Up
                 </NavLink>



             </div>


<Route  exact path="/" component={SignUp}>

</Route>


<Route  path="/sign-in" component={LoginPage}> 
 </Route>



             
            </div>
         </div>
         </Router>
        )
    }
}