import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v78td88', 'template_i04jon5', form.current, 'OAbclEWlZOzpIGYf-') 
      .then((result) => {
          alert("Email Sent 😃 ");
          document.getElementById("message").value = "";
          document.getElementById("text").value = "";
          document.getElementById("First Name").value = "";
          document.getElementById("Last Name").value = "";

      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="First Name" name="First Name" placeholder="First Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="Last Name" name="Last Name" placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" id="email" name="email" placeholder="Email" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" id="phone" name="phone" placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" id="message" name="message" placeholder="Message" required></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>  

          </Col>
        </Row>
      </Container>
    </section>
  )
}