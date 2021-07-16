import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

const FeatureDemo = (props: FeatureDemoProps) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey} style={{ textDecoration: "none" }}>
          <h3>{props.title}</h3>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>{props.children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

interface FeatureDemoProps {
  children: React.ReactNode;
  eventKey: string;
  title: string;
}

export default FeatureDemo;
