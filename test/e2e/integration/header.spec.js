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

  describe("Tính phí bảo hiểm", () => {
    it("clicks 'Bảo hiểm ô tô' navigates to /tinh-phi-bao-hiem/o-to", () => {
      cy.get("[data-cy=insurance-car]").should(($el) => {
        expect($el.text()).to.include("Bảo hiểm ô tô");
      });
      cy.get("[data-cy=insurance-car]").click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/o-to");
    });

    it("clicks 'Bảo hiểm tai nạn' navigates to /tinh-phi-bao-hiem/tai-nan", () => {
      cy.get("[data-cy=insurance-accident]").should(($el) => {
        expect($el.text()).to.include("Bảo hiểm tai nạn");
      });
      cy.get("[data-cy=insurance-accident]").click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan");
    });

    it("clicks 'Bảo hiểm con người' navigates to /tinh-phi-bao-hiem/con-nguoi", () => {
      cy.get("[data-cy=insurance-human]").should(($el) => {
        expect($el.text()).to.include("Bảo hiểm con người");
      });
      cy.get("[data-cy=insurance-human]").click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/con-nguoi");
    });
  });
});
