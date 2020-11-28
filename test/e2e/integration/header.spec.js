describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders logo, links, and buttons", () => {
    cy.get("[data-cy=logo]").should("be.visible");
    cy.contains("Về chúng tôi").should("be.visible");
    cy.contains("Xe").should("be.visible");
  });

  it("clicks 'Về chúng tôi' navigates to /ve-chung-toi", () => {
    cy.contains("Về chúng tôi").click();
    cy.url().should("include", "/ve-chung-toi");
  });

  it("clicks 'Xe/Tính phí bảo hiểm' navigates to /xe/tinh-phi", () => {
    cy.contains("Tính phí bảo hiểm").click({ force: true });
    cy.url().should("include", "/xe/tinh-phi");
  });
});
