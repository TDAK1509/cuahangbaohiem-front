describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders logo, links, and buttons", () => {
    cy.get("[data-cy=logo]").should("be.visible");
    cy.contains("Giới thiệu").should("be.visible");
    cy.contains("Tính phí bảo hiểm").should("be.visible");
  });

  it("clicks 'Giới thiệu' navigates to /gioi-thieu", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
  });

  it("clicks logo navigates to home page", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
    cy.get("[data-cy=logo]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("clicks 'Tính phí bảo hiểm > Ô tô' navigates to /tinh-phi-bao-hiem/o-to", () => {
    cy.get("[data-cy=insurance-car]").click({ force: true });
    cy.url().should("include", "/tinh-phi-bao-hiem/o-to");
  });
});
