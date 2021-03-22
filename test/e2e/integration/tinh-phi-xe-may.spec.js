describe("Tinh phi xe may", () => {
  beforeEach(() => {
    cy.visit("/san-pham/xe-may");
  });

  it("Change motorbike type update insurance value", () => {
    checkInsuranceFeeValue(toVnd(66000));
    cy.get("select").first().select("Dưới 50cc");
    checkInsuranceFeeValue(toVnd(60500));
    cy.get("select").first().select("Trên 50cc");
    checkInsuranceFeeValue(toVnd(66000));
  });

  function checkInsuranceFeeValue(value) {
    cy.get("[data-cy=insurance-fee]").find("input").should("have.value", value);
  }

  function toVnd(money) {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND"
    });
  }
});
