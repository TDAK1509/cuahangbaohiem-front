describe("Page /xe/tinh-phi", () => {
  beforeEach(() => {
    cy.visit("/xe/tinh-phi");
  });

  describe("rendering", () => {
    it("should render enough inputs", () => {
      cy.get("[data-cy=car-value]").should("be.visible");
      cy.get("[data-cy=car-year]").should("be.visible");
    });

    it("should render Calculate button", () => {
      getCalculateButton().should("be.visible");
    });
  });

  describe("on click calculate button", () => {
    describe("form error handling", () => {
      it("if car value is empty, does not show result", () => {
        getCarYearField().type("2015");
        getCalculateButton().click();
        cy.wait(1000);
        assertResultBlockIsNotRendered();
      });

      it("if car year is empty, does not show result", () => {
        getCarValueField().type("800");
        getCalculateButton().click();
        cy.wait(1000);
        assertResultBlockIsNotRendered();
      });
    });

    describe("form valid handling", () => {
      it("shows result if car and year not empty", () => {
        getCarValueField().type("800");
        getCarYearField().type("2015");
        getCalculateButton().click();
        assertResultBlockIsRendered();
      });
    });
  });
});

function getCarValueField() {
  return cy.get("[data-cy=car-value]");
}

function getCarYearField() {
  return cy.get("[data-cy=car-year]");
}

function getCalculateButton() {
  return cy.get("[data-cy=calculate-button]");
}

function assertResultBlockIsNotRendered() {
  cy.get("[data-cy=result]").should("not.empty");
}

function assertResultBlockIsRendered() {
  cy.get("[data-cy=result]").should("be.visible");
}
