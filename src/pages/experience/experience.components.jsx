import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import './experience.style.css';
import L_HARYANA from "../../assests/img/experience/haryanagovtlogo.svg";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{max: 25}}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_HARYANA} alt="Govt. of Haryana" />
                            </Card.Header>
                            <Card.Body className="justify-content-center d-flex flex-column">
                                <div>
                                    <Card.Title className="text-center">
                                        Web Developer
                                    </Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong>Role: </strong>Frontend web Developer
                                        <br />
                                        <strong>Technology: </strong>HTML, CSS, JAVASCRIPT
                                        <br/>
                                        <strong>Duration: </strong>May 2020 - Aug 2020
                                        <br/>
                                        <strong>Description</strong>
                                        <ul>
                                            <li>I have build a website for authorities which detect fire due to stubble burning or any other cause and the
                                                authority is informed which further forward the case to respective ADO or DDO and track the process.</li>
                                            <br/>
                                            <li>
                                                worked on google maps and added feature of map on website
                                            </li>
                                            <br/>
                                            <li>
                                                Resolves the bugs that are present on website
                                            </li>
                                            <br/>
                                            <li>
                                                Added new features on website
                                            </li>
                                            
                                            
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Experience;