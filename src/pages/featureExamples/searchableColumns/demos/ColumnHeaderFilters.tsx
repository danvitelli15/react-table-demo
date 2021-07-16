import React from "react";
import CodeBlock from "../../../../components/CodeBlock";
import FeatureDemo from "../../components/FeatureDemo";
import Table from "react-table";
import { FILTER_FIELD_LOCATIONS as locs } from "react-table/lib/utils/TableDataUtils";
import tableProps from "react-table/lib/interfaces/TableProps";
import { Person } from "../../../../utils/DataGenerator";

const ColumnHeaderFilters = ({ eventKey, tableProps }: ColumnHeaderFiltersProps) => {
  const displayedCode = `const test = () => 'hello'`;

  return (
    <FeatureDemo eventKey={eventKey} title="Column Header Filters">
      <p>Usage Description</p>
      <CodeBlock language="javascript">{displayedCode}</CodeBlock>
      <p>Additional Details</p>
      <Table<Person>
        {...tableProps}
        columns={tableProps.columns.map((i) => ({ ...i, filterable: true, fieldLocation: locs.COLUMN_HEADER }))}
      />
    </FeatureDemo>
  );
};

interface ColumnHeaderFiltersProps {
  eventKey: string;
  tableProps: tableProps<Person>;
}

export default ColumnHeaderFilters;
