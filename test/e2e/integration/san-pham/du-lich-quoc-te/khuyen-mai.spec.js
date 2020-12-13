describe("Page /san-pham/du-lich-quoc-te/khuyen-mai", () => {
  beforeEach(() => {
    cy.visit("/san-pham/du-lich-quoc-te/khuyen-mai");
  });

  describe("tab bar", () => {
    it("should have 5 correct tabs", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").should("be.visible");
      cy.contains("QUYỀN LỢI").should("be.visible");
      cy.contains("BỒI THƯỜNG").should("be.visible");
      cy.contains("KHUYẾN MÃI").should("be.visible");
      cy.contains("TÀI LIỆU MẪU").should("be.visible");
    });

    it("KHUYẾN MÃI tab should be active", () => {
      cy.get("li.is-active").should(($el) => {
        expect($el.text()).to.contain("KHUYẾN MÃI");
      });
    });
  });
});
