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
      cy.get("[data-cy=calculate-button]").should("be.visible");
    });
  });
});
