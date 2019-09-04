import React, { Fragment } from "react";
import Form from "./Form";
import Clients from "./Clients";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Clients />
    </Fragment>
  );
}
