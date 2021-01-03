import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './contact-form.style.css';

const Contact = () =>{
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        {/* buttons */}
                        <div className="m-2">
                            <a href="mailto:2609.shsumit@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="2609.shsumit@gmail.com">
                                <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/sumit-sharma-999379191/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="visit my linkedin">
                                <i className="fab fa-linkedin"></i> linkedin
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/sumit2609" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My Github Profile">
                                <i className="fab fa-github-square"></i> Github
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.facebook.com/profile.php?id=100005912739447" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="facebook profile">
                                <i className="fab fa-facebook-square"></i> facebook
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://twitter.com/SumitSh34441193" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="twitter profile">
                                <i className="fab fa-twitter"></i> twitter
                                </Button>
                            </a>
                        </div>                        
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Contact;