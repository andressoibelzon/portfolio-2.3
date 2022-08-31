import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import {GoMarkGithub} from 'react-icons/go'
import { GrLinkedinOption } from 'react-icons/gr'


export const Footer = () => {

    return (
        <footer className="footer">
            <Container className="footer-container">
                <Row className="align-item-center">

                    <Col sm={6}>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/andres-soibelzon-06b14b191/"  target="_blank"><GrLinkedinOption color="white"/></a>
                            <a href="https://github.com/andressoibelzon"  target="_blank"><GoMarkGithub color="white"/></a>
                        </div>
                    </Col>
                    <Col sm={6}>
                    <p>Copyright 2022 - Andres Soibelzon.</p>
                        </Col>
                </Row>
            </Container>
        </footer>
    )
}