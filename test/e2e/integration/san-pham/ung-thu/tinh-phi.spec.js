describe("Page /san-pham/ung-thu", () => {
  beforeEach(() => {
    cy.visit("/san-pham/ung-thu");
  });

  describe("tab bar", () => {
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

    it("clicks QUYEN LOI goes to /san-pham/ung-thu/quyen-loi", () => {
      cy.contains("QUYỀN LỢI").click();
      cy.url().should("include", "/san-pham/ung-thu/quyen-loi");
    });

    it("clicks BỒI THƯỜNG to /san-pham/ung-thu/boi-thuong", () => {
      cy.contains("BỒI THƯỜNG").click();
      cy.url().should("include", "/san-pham/ung-thu/boi-thuong");
    });

    it("clicks KHUYẾN MÃI to /san-pham/ung-thu/khuyen-mai", () => {
      cy.contains("KHUYẾN MÃI").click();
      cy.url().should("include", "/san-pham/ung-thu/khuyen-mai");
    });

    it("clicks TÀI LIỆU MẪU goes to /san-pham/ung-thu/tai-lieu-mau", () => {
      cy.contains("TÀI LIỆU MẪU").click();
      cy.url().should("include", "/san-pham/ung-thu/tai-lieu-mau");
    });

    it("clicks TÍNH PHÍ & ĐẶT MUA to /san-pham/ung-thu", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").click();
      cy.url().should("match", /\/san-pham\/ung-thu\/?$/);
    });
  });
});
