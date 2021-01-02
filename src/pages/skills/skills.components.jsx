import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './skills.style.css';
import { skills } from "./skill-data";


const Skills = () => {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    {/* frontend */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.frontend.map((skills, index) => (
                                            <spam className="p-2" key={'${skills.skillName}${index}'}>
                                                <a className="text-dark text-decoration-none" href={skills.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skills.imgSrc} alt={skills.imgAltText} rounded className="image-style m-1"></Image> {skills.skillName}
                                                </a>
                                            </spam>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                        
                        {/* programming language */}

                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Programming Language</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.programmingLanguages.map((skills, index) => (
                                            <spam className="p-2" key={'${skills.skillName}${index}'}>
                                                <a className="text-dark text-decoration-none" href={skills.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skills.imgSrc} alt={skills.imgAltText} rounded className="image-style m-1"></Image> {skills.skillName}
                                                </a>
                                            </spam>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                        {/* version control */}

                        <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Version control</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.versionControl.map((skills, index) => (
                                            <spam className="p-2" key={'${skills.skillName}${index}'}>
                                                <a className="text-dark text-decoration-none" href={skills.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skills.imgSrc} alt={skills.imgAltText} rounded className="image-style m-1"></Image> {skills.skillName}
                                                </a>
                                            </spam>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Hosting Platform</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.hostingPlatform.map((skills, index) => (
                                            <spam className="p-2" key={'${skills.skillName}${index}'}>
                                                <a className="text-dark text-decoration-none" href={skills.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skills.imgSrc} alt={skills.imgAltText} rounded className="image-style m-1"></Image> {skills.skillName}
                                                </a>
                                            </spam>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </CardDeck>
        </div>
    );
};

export default Skills;