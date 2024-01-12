import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron id="experience" className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {experiences.data.map((data, index) => (
              <Col key={index} lg="6">
                <ExperienceCard data={data} />
              </Col>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}


export default Experience;