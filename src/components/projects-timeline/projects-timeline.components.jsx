import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
} from '@merc/react-timeline';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Image from "react-bootstrap/Image";

import L_weather from "../../assests/img/projects/L_weather.webp";
import YELP_CAMP from "../../assests/img/projects/YELP_CAMP.webp";

import L_HTML5 from "../../assests/img/skills/html-5.svg";
import L_CSS3 from "../../assests/img/skills/css3.svg";
import L_REACT from "../../assests/img/skills/react.svg"
import MONGODB from "../../assests/img/skills/mongodb.svg";
import NODEJS from "../../assests/img/skills/nodejs.svg";
import EXPRESS from "../../assests/img/skills/express.svg";

import './projects-timeline.style.css';

const ProjectTimeline = () =>{
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="01/09/2020"
                        className="text-center"
                        text="React weather app"
                        src={L_weather}
                        alt="React weather app"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong>This is a weather web app created with the help of Reactjs.
                                                <hr/>
                                                <strong>Features: </strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Tells weather of any location across the world.
                                                    </li>
                                                    <li>
                                                        Tells weather in both Celcius and Fahrenheit.
                                                    </li>
                                                </ul>
                                                <hr/>
                                                <strong>Tech used: </strong>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            >
                                                            </Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={L_CSS3}
                                                            alt="CSS"
                                                            rounded
                                                            className="image-style m-1"
                                                        >
                                                        </Image>{" "}
                                                         CSS
                                                    </span>
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={L_REACT}
                                                            alt="REACT"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        >
                                                        </Image>{" "}
                                                         REACT
                                                    </span>                                                        
                                                    </li>
                                                </ul>
                                                <hr/>
                                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                                    <UrlButton
                                                    href="https://github.com/sumit2609/react-weather-web-app"
                                                    target="_blank"
                                                    >
                                                    SOURCE CODE
                                                    </UrlButton>                                    
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* 2nd project */}

                    <ImageEvent
                        date="26/05/2021"
                        className="text-center"
                        text="YelpCamp"
                        src={YELP_CAMP}
                        alt="YelpCamp"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong>This is an Express app. Here we can find post different camping location and tell about location so that if someone wants to go there can be guided.
                                                <hr/>
                                                <strong>Features: </strong>
                                                <ul className="list-styles pt-1">
                                                    <li>
                                                        Tells about different Camping locations.
                                                    </li>
                                                    <li>
                                                        Other people can comment there views about location.
                                                    </li>
                                                    <li>
                                                        Tell average price per night to stay there.
                                                    </li>
                                                </ul>
                                                <hr/>
                                                <strong>Tech used: </strong>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            >
                                                            </Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={L_CSS3}
                                                            alt="CSS"
                                                            rounded
                                                            className="image-style m-1"
                                                        >
                                                        </Image>{" "}
                                                         CSS
                                                    </span>
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={MONGODB}
                                                            alt="MONGODB"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        >
                                                        </Image>{" "}
                                                         MONGODB
                                                    </span>                                                        
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={NODEJS}
                                                            alt="NODEJS"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        >
                                                        </Image>{" "}
                                                         NODEJS
                                                    </span>                                                        
                                                    </li>
                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={EXPRESS}
                                                            alt="EXPRESS"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        >
                                                        </Image>{" "}
                                                         EXPRESS
                                                    </span>                                                        
                                                    </li>
                                                </ul>
                                                <hr/>
                                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                                    <UrlButton
                                                    href="https://github.com/sumit2609/Yelp-Camp"
                                                    target="_blank"
                                                    >
                                                    SOURCE CODE
                                                    </UrlButton>                                    
                                                </div>
                                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                                    <UrlButton
                                                    href="https://guarded-eyrie-49656.herokuapp.com"
                                                    target="_blank"
                                                    >
                                                    LIVE
                                                    </UrlButton>                                    
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default ProjectTimeline;