import React, { Component } from 'react'
import { Button, Image, Row, Col, Card,Footer } from 'react-bootstrap'

import './Home.css'



import CustomNavBar from './CustomNavBar';

export default class Home extends Component {
    render() {
        
        return (
            <div >
           <CustomNavBar/>
                <Image src="assets/tech.jpg" className="header-image" />


                <Row className="show-grid text-center " id="responsive-navbar-navs">
                    <Col xs={12} sm={12} >
                        <strong><center><h1>Our Services</h1> </center> </strong>
                    </Col>

               
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ width: '18rem',marginLeft:'25px'}}>
  <Card.Img variant="top" src="assets/computer.jpg" />
  <Card.Body>
    <Card.Title>Transformation</Card.Title>
    <Card.Text>
      We Provide Transformation from Paper Work System to Computer based systems to Schools
     
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>


                    <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ width: '18rem'  }}>
             <Card.Img variant="top" src="assets/students.jpg" style={{ height:'13.4rem' }} />
  <Card.Body>
    <Card.Title>Counseling</Card.Title>
    <Card.Text>
      We Provide Free Counseling to Students so that they can achieve good educations
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>


                    <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="assets/labs.jpg" style={{ height:'13.4rem' }}/>
  <Card.Body>
    <Card.Title>Building Labs</Card.Title>
    <Card.Text>
    Designing and developing all science labs and their equipment purchasing.

    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
       

                   
                 
                </Row>



                <Row className="lowerClass " >
                 


                    <Col xs={12} sm={6} >

                    <h3>Prepared By </h3>
                    <h4>Mohammad Wajhi Uddin </h4>
           
                    </Col>


                    <Col xs={12} sm={6} >

                    <h3>Email </h3>
                    <h4>mohammad.wajhiuddin@gmail.com </h4>

                   </Col>
       

                   
                 
                </Row>

                
           

               
         
            </div>
        )
    }
}