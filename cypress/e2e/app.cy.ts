describe("App", () => {
  it("should search for a user and display the result copy", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[name='inputQuery']").type("tom");
    cy.get("button[type='submit']").click();

    cy.intercept({
      method: "GET",
      url: "https://api.github.com/search/users?q=tom&per_page=5&page=1",
    }).as("searchResultData");
    cy.wait("@searchResultData");

    cy.get("[data-testid='search-result-copy']").should("be.visible");
  });
});
