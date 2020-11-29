const ERROR_NOT_A_NUMBER = "Vui lòng điền một con số.";

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
      it("if car value is empty, does not show result but show HTML5 required validation", () => {
        getCarYearField().type("2015");
        getCalculateButton().click();
        cy.wait(1000);
        assertResultBlockIsNotRendered();
        cy.get("input:invalid").should("have.length", 1);
      });

      it("if car year is empty, does not show result but show HTML5 required validation", () => {
        getCarValueField().type("800");
        getCalculateButton().click();
        cy.wait(1000);
        assertResultBlockIsNotRendered();
        cy.get("input:invalid").should("have.length", 1);
      });

      it("if car value is not a number, show error", () => {
        getCarValueField().type("not a number");
        getCarYearField().type("2015");
        getCalculateButton().click();
        cy.contains(ERROR_NOT_A_NUMBER).should("be.visible");
        getErrorMessage().should("have.length", 1);
      });

      it("if car year is not a number, show error", () => {
        getCarValueField().type("800");
        getCarYearField().type("not a number");
        getCalculateButton().click();
        cy.contains(ERROR_NOT_A_NUMBER).should("be.visible");
        cy.contains(ERROR_NOT_A_NUMBER).its("length").should("eq", 1);
        getErrorMessage().should("have.length", 1);
      });

      it("if both car value and car year are not numbers, show 2 errors", () => {
        getCarValueField().type("not a number");
        getCarYearField().type("not a number");
        getCalculateButton().click();
        cy.contains(ERROR_NOT_A_NUMBER).should("be.visible");
        getErrorMessage().should("have.length", 2);
      });
    });

    describe("form valid handling", () => {
      it("shows result if car and year not empty", () => {
        getCarValueField().type("800");
        getCarYearField().type("2015");
        getCalculateButton().click();
        assertResultBlockIsRendered();
      });

      it("results show 4 insurance brands", () => {
        getCarValueField().type("800");
        getCarYearField().type("2015");
        getCalculateButton().click();
        cy.contains("PVI").should("be.visible");
        cy.contains("Bảo Việt").should("be.visible");
        cy.contains("Bảo Minh").should("be.visible");
        cy.contains("MIC").should("be.visible");
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

function getErrorMessage() {
  return cy.get("[data-cy=error-message]");
}

function assertResultBlockIsNotRendered() {
  cy.get("[data-cy=result]").should("not.empty");
}

function assertResultBlockIsRendered() {
  cy.get("[data-cy=result]").should("be.visible");
}
