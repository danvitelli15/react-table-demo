import { Person } from "./DataGenerator";
import tableProps from "react-table/lib/interfaces/TableProps";

const DefaultTableProps = (data: Array<Person>): tableProps<Person> => ({
  columns: [
    {
      displayName: "Picture",
      fieldName: "IamgeUrl",
      filterable: false,
      fieldLocation: undefined,
    },
    {
      displayName: "Name",
      fieldName: "Name",
      filterable: false,
      fieldLocation: undefined,
    },
    {
      displayName: "Email Address",
      fieldName: "Email",
      filterable: false,
      fieldLocation: undefined,
    },
    {
      displayName: "Age",
      fieldName: "Age",
      filterable: false,
      fieldLocation: undefined,
    },
    {
      displayName: "City",
      fieldName: "City",
      filterable: false,
      fieldLocation: undefined,
    },
  ],
  data: data,
  bootstrap: true,
  className: undefined,
  elementClassNames: undefined,
});

export const emptyProps = {
  columns: [],
  data: [],
  bootstrap: true,
  className: undefined,
  elementClassNames: undefined,
};

export default DefaultTableProps;
