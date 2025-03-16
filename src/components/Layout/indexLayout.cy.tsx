import React from "react";
import Layout from "./index";

describe("<Layout />", () => {
  it("renders Layout", () => {
    cy.mount(<Layout />);
  });
});
