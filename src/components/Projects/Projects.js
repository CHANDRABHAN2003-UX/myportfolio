import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import timber from "../../Assets/Projects/timber.png";
import recipe from "../../Assets/Projects/recipe.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timber}
              isBlog={false}
              title="Timber Tales"
              description="Timber Tales is a platform built with React.js, Material-UI, and Firebase, allowing users to customize and explore wooden art pieces. It includes features for real-time updates, image uploads, and interactive engagement to enhance the user experience."
              ghLink="https://github.com/jankio7/6w_2024_RF_Chandrabhan_TimeberTales"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Maker"
              description="Recipe Maker is a platform built with React.js, Bootstrap, and Firebase, allowing users to create, customize, and explore a variety of recipes. It includes features for real-time updates, image uploads, and interactive engagement to enhance the user experience."
              ghLink="https://github.com/CHANDRABHAN2003-UX/recipemaker"
            />
          </Col>

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
