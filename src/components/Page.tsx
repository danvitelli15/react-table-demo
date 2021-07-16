import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header";

const Page = (props: PageProps) => (
  <Container>
    <Row>
      <Header></Header>
    </Row>
    <Row>{props.children}</Row>
  </Container>
);

interface PageProps {
  children: React.ReactNode;
}

export default Page;
