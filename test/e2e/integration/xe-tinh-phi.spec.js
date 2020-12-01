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

      it("results show 4 insurance brands with correct insurance values and 4 BUY buttons", () => {
        getCarValueField().type("800");
        getCarYearField().type("2015");
        getCalculateButton().click();

        assertResultShows4BrandsAndInsuranceValues();
        assertResultShows4BuyButtons();
      });
    });
  });

  describe("On click BUY button", () => {
    beforeEach(() => {
      getCarValueField().type("800");
      getCarYearField().type("2015");
      getCalculateButton().click();
      getResultBuyButton().first().click();
    });

    it("shows popup with inputs email, phone, note, CANCEL button and BUY button", () => {
      getPopup().should("be.visible");
      getPopup().find("[data-cy=email]").should("be.visible");
      getPopup().find("[data-cy=phone]").should("be.visible");
      getPopup().find("[data-cy=note]").should("be.visible");
      getPopup().find("[data-cy=cancel-button]").should("be.visible");
      getPopup().find("[data-cy=buy-button]").should("be.visible");
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

function getResultBuyButton() {
  return cy.get("[data-cy=buy-button]");
}

function getPopup() {
  return cy.get("[data-cy=buy-popup]");
}

function assertResultBlockIsRendered() {
  cy.get("[data-cy=result]").should("be.visible");
}

function assertResultShows4BrandsAndInsuranceValues() {
  cy.get("[data-cy=insurance-result]")
    .eq(0)
    .invoke("text")
    .should("include", "PVI")
    .should("include", "12.320.000");

  cy.get("[data-cy=insurance-result]")
    .eq(1)
    .invoke("text")
    .should("include", "Bảo Việt")
    .should("include", "13.860.000");

  cy.get("[data-cy=insurance-result]")
    .eq(2)
    .invoke("text")
    .should("include", "Bảo Minh")
    .should("include", "13.400.000");

  cy.get("[data-cy=insurance-result]")
    .eq(3)
    .invoke("text")
    .should("include", "MIC")
    .should("include", "10.400.000");
}

function assertResultShows4BuyButtons() {
  getResultBuyButton().should("have.length", 4);
}
