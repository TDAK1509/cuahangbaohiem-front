describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders logo, links, and buttons", () => {
    cy.get("[data-cy=logo]").should("be.visible");
    cy.contains("Giới thiệu").should("be.visible");
    cy.contains("Tính phí bảo hiểm").should("be.visible");
    cy.contains("Hướng dẫn").should("be.visible");
  });

  it("clicks 'Giới thiệu' navigates to /gioi-thieu", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
  });

  it("clicks 'Hướng dẫn' navigates to /huong-dan", () => {
    cy.contains("Hướng dẫn").click();
    cy.url().should("include", "/huong-dan");
  });

  it("clicks logo navigates to home page", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
    cy.get("[data-cy=logo]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("clicks 'Tính phí bảo hiểm > Bảo hiểm ô tô' navigates to /tinh-phi-bao-hiem/o-to", () => {
    cy.get("[data-cy=insurance-car]").click({ force: true });
    cy.url().should("include", "/tinh-phi-bao-hiem/o-to");
  });

  // it("clicks 'Tính phí bảo hiểm > Bảo hiểm sức khỏe' navigates to /tinh-phi-bao-hiem/suc-khoe", () => {
  //   cy.get("[data-cy=insurance-health]").click({ force: true });
  //   cy.url().should("include", "/tinh-phi-bao-hiem/o-to");
  // });
});
