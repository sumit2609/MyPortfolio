import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from "../../assests/img/profile/profile.webp";
import Button from 'react-bootstrap/Button';

import "./about.style.css";

const About = () =>{
    return (
        <div id="about">
        <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* my image */}
                    <Col xs={12} md={6}>
                        <row className="mb-2 mb-2 justify-content-center">
                            <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid/>
                        </row>
                    </Col>
                    {/* about me description */}
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 my-details rounded">
                            Hi there! I am <strong>&nbsp;Sumit Sharma</strong>
                            <br />I am 2nd yr Engineering student from University Institude Of Engineering and Technology, Panjab University, Chandigarh with specialization in Information Technology.
                            <br />I like web development and learning it by making different projects and seeking internship opportunity for Frontend web developer.
                            <br />
                        {/* buttons */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">Let's talk</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/sumit2609"  target="_blank">
                                        <Button className="m-2" variant="outline-success" >Github</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/sumit-sharma-999379191/" target="_blank">
                                        <Button className="m-2" variant="outline-info">LinkedIn</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1AFp6jPWZeTYInB-KqMHs-Beqd9ud7c_k/view?usp=sharing"  target="_blank">
                                        <Button className="m-2" variant="outline-warning">My Resume</Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default About;