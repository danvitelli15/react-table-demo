import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import { Person } from "../../../utils/DataGenerator";
import ColumnHeaderFilters from "./demos/ColumnHeaderFilters";
import tableProps from "react-table/lib/interfaces/TableProps";

const SearchableColumnsExamples = ({ tableProps }: SearchableColumnsExamplesProps) => {
  return (
    <Container fluid>
      <Row>
        <h2>Searchable</h2>
      </Row>
      <Row>
        <Accordion style={{ width: "100%" }}>
          <ColumnHeaderFilters eventKey="0" tableProps={tableProps} />
        </Accordion>
      </Row>
    </Container>
  );
};

interface SearchableColumnsExamplesProps {
  tableProps: tableProps<Person>;
}

export default SearchableColumnsExamples;
