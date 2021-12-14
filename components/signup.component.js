import "./home.css"
import React, { Component } from "react";
import { Navbar, Nav, Button, Carousel, Form, Row, Col, Card, CardGroup }  from "react-bootstrap"
import class1 from "./class1.jpg"
import class2 from "./class2.jpg"
import class3 from "./class3.jpg"
import class4 from "./class4.jpg"
import class5 from "./class5.jpg"
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="light">               
                    <Navbar.Brand className="navleft" href="#home">logoipsum</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />                   
                    <Nav className="me-auto"></Nav>
                    <Nav className="navright">
                        <Nav.Link className="navling" href="#deets">Course</Nav.Link>
                        <Nav.Link className="navling" href="#memes">Category</Nav.Link>
                        <Nav.Link className="navling" href="#memes">Become Instructor</Nav.Link>
                        <Link to="./sign-in"><Button variant="outline-warning">Register/Login</Button></Link>
                    </Nav>               
               </Navbar>
               <div className="caro">
                    <Carousel variant="dark">
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={class1}
                        alt="First slide"/>
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={class2}
                        alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={class3}
                        alt="Third slide"/>
                    </Carousel.Item>
                    </Carousel>
                    <h2 className="skill">Selamat datang di Skills.id</h2>
                    <h6>Silahkan cari dan pilih kursus yang menarik bagi anda di Skills.id</h6>
                    <Row className="row-form">
                        <Col sm={9}><Form.Control className="search-form" size="lg" type="text" placeholder="Find Course" /></Col>
                        <Col sm={3}><Button className="fc-btn" size="lg" variant="warning">Find Course</Button>{' '}</Col>
                    </Row>
                    <div className="cardweb">
                        <CardGroup>
                            <Card className="jarakcard">
                                <Card.Img variant="top" src={class5} alt="class5" />
                                <Card.Body>
                                <Card.Title>Fundamental web programming</Card.Title>
                                <Card.Text>
                                    Rp. 500k
                                </Card.Text>
                                </Card.Body>
                                <Button variant="outline-warning">Beli</Button>
                            </Card>
                            <Card className="jarakcard">
                                <Card.Img variant="top" src={class5} alt="class5" />
                                <Card.Body>
                                <Card.Title>Fundamental web programming</Card.Title>
                                <Card.Text>
                                    Rp. 500k
                                </Card.Text>
                                </Card.Body>
                                <Button variant="outline-warning">Beli</Button>
                            </Card>
                            <Card className="jarakcard">
                                <Card.Img variant="top" src={class5} alt="class5" />
                                <Card.Body>
                                <Card.Title>Fundamental web programming</Card.Title>
                                <Card.Text>
                                    Rp. 500k
                                </Card.Text>
                                </Card.Body>
                                <Button variant="outline-warning">Beli</Button>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={class5} alt="class5" />
                                <Card.Body>
                                <Card.Title>Fundamental web programming</Card.Title>
                                <Card.Text>
                                    Rp. 500k
                                </Card.Text>
                                </Card.Body>
                                <Button variant="outline-warning">Beli</Button>
                            </Card>
                        </CardGroup>
                    </div>
                    <footer>
                        <h1>Skills.id</h1>
                        
                     </footer>
               </div>
               
               
                   
               
               
               
            </div>
        );
    }
}