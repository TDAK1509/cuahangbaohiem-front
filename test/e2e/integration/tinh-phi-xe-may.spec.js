import { addYears, addDays, format } from "date-fns";

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

  it("Change start date or year update end date", () => {
    const today = new Date();

    checkEndDateValue(format(addYears(today, 1), "dd-MM-yyyy"));

    cy.get("select").eq(1).select("2 năm");
    checkEndDateValue(format(addYears(today, 2), "dd-MM-yyyy"));

    cy.get("select").eq(1).select("1 năm");
    checkEndDateValue(format(addYears(today, 1), "dd-MM-yyyy"));

    selectTomorrowForInsuranceStartDate();
    const tomorrow = addDays(today, 1);
    checkEndDateValue(format(addYears(tomorrow, 1), "dd-MM-yyyy"));
  });

  it("Without ticking addon, changing addon makes no effect", () => {
    checkAddOnFeeValue(toVnd(0));
    cy.get("select").eq(2).select("20 triệu đồng/ người/ vụ");
    checkAddOnFeeValue(toVnd(0));
  });

  it("When ticked addon, changing addon updates add on fee", () => {
    clickAddOnCheckbox();
    checkAddOnFeeValue(toVnd(20000));
    cy.get("select").eq(2).select("20 triệu đồng/ người/ vụ");
    checkAddOnFeeValue(toVnd(20000 * 2));
  });

  it("Total fee shows only insurance fee if no addon, show + addon if there is addon", () => {
    checkTotalFeeValue(toVnd(66000));
    clickAddOnCheckbox();

    const totalFee = `${toVnd(66000)} + ${toVnd(20000)} = ${toVnd(86000)}`;
    checkTotalFeeValue(toVnd(totalFee));
  });

  it("Choosing promotion add 1 year plus 1 year updates end date", () => {
    const today = new Date();
    checkEndDateValue(format(addYears(today, 1), "dd-MM-yyyy"));

    cy.get("[data-cy=promotion-code]").find("input").type("banAnhKhuong");
    cy.contains("Mua 1 năm tặng 1 năm ").click();

    checkEndDateValue(format(addYears(today, 2), "dd-MM-yyyy"));
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

function checkEndDateValue(value) {
  cy.get("[data-cy=end-date]").find("input").should("have.value", value);
}

function selectTomorrowForInsuranceStartDate() {
  cy.get("[data-cy=start-date]").find("input").click();
  cy.get("td.cell.active ~ td").first().click();
}

function checkAddOnFeeValue(value) {
  cy.get("[data-cy=add-on-fee]").find("input").should("have.value", value);
}

function clickAddOnCheckbox() {
  cy.contains(
    "Bảo hiểm tai nạn người trên xe, phụ xe, người ngồi trên xe"
  ).click();
}

function checkTotalFeeValue(value) {
  cy.get("[data-cy=total-fee]").find("input").should("have.value", value);
}
