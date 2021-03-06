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
    beforeEach(() => {
      cy.get("[data-cy=motorbike-radio]").as("motorbikeRadio");
      cy.get("[data-cy=next-button]").as("nextButton");
    });

    describe("error handling", () => {
      it("field motorbike type is required", () => {
        cy.get("@nextButton").click();
        cy.assertFailedHtml5FormValidation("@motorbikeRadio");
      });

      it("chooses > 50cc, clicking next go to next page", () => {
        cy.get("@motorbikeRadio").eq(1).click();
        cy.get("@nextButton").click();
        cy.contains("BƯỚC 2").should("be.visible");
      });
    });
  });
});
