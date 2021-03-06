const NEXT_BUTTON_SELECTOR = "[data-cy=next-button]";
const MOTORBIKE_RADIO_SELECTOR = "[data-cy=motorbike-radio]";
const MOTORBIKE_OWNER_SELECTOR = "[data-cy=owner-input]";
const MOTORBIKE_LICENSE_PLATE_SELECTOR = "[data-cy=license-plate-input]";

describe("Page /san-pham/xe-may", () => {
  beforeEach(() => {
    cy.visit("/san-pham/xe-may");
  });

  describe.skip("tab bar", () => {
    it("should have 5 correct tabs", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").should("be.visible");
      cy.contains("QUYỀN LỢI").should("be.visible");
      cy.contains("BỒI THƯỜNG").should("be.visible");
      cy.contains("KHUYẾN MÃI").should("be.visible");
      cy.contains("TÀI LIỆU MẪU").should("be.visible");
    });

    it("TÍNH PHÍ & ĐẶT MUA tab should be active", () => {
      cy.get("li.is-active").should(($el) => {
        expect($el.text()).to.contain("TÍNH PHÍ & ĐẶT MUA");
      });
    });

    it("clicks QUYEN LOI goes to /san-pham/xe-may/quyen-loi", () => {
      cy.contains("QUYỀN LỢI").click();
      cy.url().should("include", "/san-pham/xe-may/quyen-loi");
    });

    it("clicks BỒI THƯỜNG to /san-pham/xe-may/boi-thuong", () => {
      cy.contains("BỒI THƯỜNG").click();
      cy.url().should("include", "/san-pham/xe-may/boi-thuong");
    });

    it("clicks KHUYẾN MÃI to /san-pham/xe-may/khuyen-mai", () => {
      cy.contains("KHUYẾN MÃI").click();
      cy.url().should("include", "/san-pham/xe-may/khuyen-mai");
    });

    it("clicks TÀI LIỆU MẪU goes to /san-pham/xe-may/tai-lieu-mau", () => {
      cy.contains("TÀI LIỆU MẪU").click();
      cy.url().should("include", "/san-pham/xe-may/tai-lieu-mau");
    });

    it("clicks TÍNH PHÍ & ĐẶT MUA to /san-pham/xe-may", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").click();
      cy.url().should("match", /\/san-pham\/xe-may\/?$/);
    });
  });

  describe("form handling", () => {
    describe("step 1", () => {
      it("field motorbike type is required", () => {
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(MOTORBIKE_RADIO_SELECTOR);
      });

      it("chooses > 50cc, clicking next go to next page", () => {
        cy.get(MOTORBIKE_RADIO_SELECTOR).eq(1).click();
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.contains("BƯỚC 2: THÔNG TIN XE").should("be.visible");
      });
    });

    describe("step 2", () => {
      beforeEach(() => {
        goToStep2();
      });

      it("field motorbike owner and license plate are required", () => {
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(MOTORBIKE_OWNER_SELECTOR);
        cy.assertFailedHtml5FormValidation(MOTORBIKE_LICENSE_PLATE_SELECTOR);
      });
    });
  });
});

function goToStep2() {
  cy.get(MOTORBIKE_RADIO_SELECTOR).eq(1).click();
  cy.get(NEXT_BUTTON_SELECTOR).click();
  cy.contains("BƯỚC 2: THÔNG TIN XE").should("be.visible");
}
