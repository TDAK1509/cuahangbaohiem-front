describe("Home", () => {
  it("can go to home page", () => {
    cy.visit("/");
    cy.contains("Header").should("be.visible");
  });
});
