describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders logo, links, and buttons", () => {
    cy.get("[data-cy=logo]").should("be.visible");
    cy.contains("Về chúng tôi").should("be.visible");
    cy.contains("Xe").should("be.visible");
  });
});
