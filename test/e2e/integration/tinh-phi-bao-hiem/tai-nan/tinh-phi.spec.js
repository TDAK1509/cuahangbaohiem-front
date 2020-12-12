describe("Page /tinh-phi-bao-hiem/tai-nan", () => {
  beforeEach(() => {
    cy.visit("/tinh-phi-bao-hiem/tai-nan");
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

    it("clicks QUYEN LOI goes to /tinh-phi-bao-hiem/tai-nan/quyen-loi", () => {
      cy.contains("QUYỀN LỢI").click();
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan/quyen-loi");
    });

    it("clicks BỒI THƯỜNG to /tinh-phi-bao-hiem/tai-nan/boi-thuong", () => {
      cy.contains("BỒI THƯỜNG").click();
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan/boi-thuong");
    });

    it("clicks KHUYẾN MÃI to /tinh-phi-bao-hiem/tai-nan/khuyen-mai", () => {
      cy.contains("KHUYẾN MÃI").click();
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan/khuyen-mai");
    });

    it("clicks TÀI LIỆU MẪU goes to /tinh-phi-bao-hiem/tai-nan/tai-lieu-mau", () => {
      cy.contains("TÀI LIỆU MẪU").click();
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan/tai-lieu-mau");
    });

    it("clicks TÍNH PHÍ & ĐẶT MUA to /tinh-phi-bao-hiem/tai-nan", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").click();
      cy.url().should("match", /\/tinh-phi-bao-hiem\/tai-nan\/?$/);
    });
  });
});
