describe("Page /tinh-phi-bao-hiem/o-to/quyen-loi", () => {
  beforeEach(() => {
    cy.visit("/tinh-phi-bao-hiem/o-to/quyen-loi");
  });

  describe("tab bar", () => {
    it("should have 5 correct tabs", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").should("be.visible");
      cy.contains("QUYỀN LỢI").should("be.visible");
      cy.contains("BỒI THƯỜNG").should("be.visible");
      cy.contains("KHUYẾN MÃI").should("be.visible");
      cy.contains("TÀI LIỆU MẪU").should("be.visible");
    });

    it("QUYEN LOI tab should be active", () => {
      cy.get("li.is-active").should(($el) => {
        expect($el.text()).to.contain("QUYỀN LỢI");
      });
    });
  });
});