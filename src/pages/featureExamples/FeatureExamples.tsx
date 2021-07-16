import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Route, Switch } from "react-router";
import Page from "../../components/Page";
import SideNav from "../../components/SideNav";
import SearchableColumnsExamples from "./searchableColumns/SearchableColumnsExamples";
import { GenerateData } from "../../utils/DataGenerator";
import DefaultTableProps, { emptyProps } from "../../utils/DefaultTableProps";
import { Person } from "../../utils/DataGenerator";
import tableProps from "react-table/lib/interfaces/TableProps";

const FeatureExamples = () => {
  const [defaultTableProps, setDefaultProps] = useState<tableProps<Person>>(emptyProps);

  useEffect(() => {
    const setter = (data: Array<Person>) => setDefaultProps(DefaultTableProps(data));
    GenerateData(setter);
  }, []);

  return (
    <Page>
      <Col md="3">
        <SideNav></SideNav>
      </Col>
      <Col md="9">
        <Switch>
          <Route path="/featureExamples/searchableColumns">
            <SearchableColumnsExamples tableProps={defaultTableProps} />
          </Route>
          <Route path="/featureExamples/sortableColumns">sort</Route>
        </Switch>
      </Col>
    </Page>
  );
};

export default FeatureExamples;
