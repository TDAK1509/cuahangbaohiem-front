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
      it("if car value is empty, shows HTML5 required validation", () => {
        getCarYearField().type("2015");
        getCalculateButton().click();
        cy.assertHtml5FormValidation();
      });

      it("if car year is empty, shows HTML5 required validation", () => {
        getCarValueField().type("800");
        getCalculateButton().click();
        cy.assertHtml5FormValidation();
      });

      it("if car value is not a number, shows HTML5 required validation", () => {
        getCarValueField().type("not a number");
        getCarYearField().type("2015");
        getCalculateButton().click();
        const errorNotANumber = "Vui lòng điền một con số.";
        cy.assertHtml5FormValidation(getCarValueField(), errorNotANumber);
      });

      it("if car year is not a number, shows HTML5 required validation", () => {
        getCarValueField().type("800");
        getCarYearField().type("not a number");
        getCalculateButton().click();

        const errorInvalidYear = "Năm sản xuất không hợp lệ.";
        cy.assertHtml5FormValidation(getCarYearField(), errorInvalidYear);
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

function assertResultBlockIsRendered() {
  cy.get("[data-cy=result]").should("be.visible");
}
