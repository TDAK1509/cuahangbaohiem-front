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

  it("Change year updates insurance value", () => {
    checkInsuranceFeeValue(toVnd(66000));
    cy.get("select").eq(1).select("2 năm");
    checkInsuranceFeeValue(toVnd(66000 * 2));

    cy.get("select").first().select("Dưới 50cc");
    cy.get("select").eq(1).select("3 năm");
    checkInsuranceFeeValue(toVnd(60500 * 3));
  });
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
