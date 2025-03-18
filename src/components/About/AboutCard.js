import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chandrabhan Singh </span>
            from <span className="purple"> Phagwara, India.</span>
            <br />
            I am pursuing my Bachelor Of Computer Application from GNA Universtiy.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <br />
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chandrabhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
