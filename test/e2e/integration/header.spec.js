describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders logo, links, and buttons", () => {
    cy.get("[data-cy=logo]").should("be.visible");
    cy.contains("Giới thiệu").should("be.visible");
    cy.contains("Tính phí bảo hiểm").should("be.visible");
    cy.contains("Hướng dẫn").should("be.visible");
  });

  it("clicks 'Giới thiệu' navigates to /gioi-thieu", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
  });

  it("clicks 'Hướng dẫn' navigates to /huong-dan", () => {
    cy.contains("Hướng dẫn").click();
    cy.url().should("include", "/huong-dan");
  });

  it("clicks logo navigates to home page", () => {
    cy.contains("Giới thiệu").click();
    cy.url().should("include", "/gioi-thieu");
    cy.get("[data-cy=logo]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  describe("Tính phí bảo hiểm", () => {
    it("clicks 'Bảo hiểm ô tô' navigates to /tinh-phi-bao-hiem/o-to", () => {
      cy.get("[data-cy=insurance-car]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm ô tô");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/o-to");
    });

    it("clicks 'Bảo hiểm tai nạn 24/24' navigates to /tinh-phi-bao-hiem/tai-nan", () => {
      cy.get("[data-cy=insurance-accident]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm tai nạn 24/24");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/tai-nan");
    });

    it("clicks 'Bảo hiểm sức khỏe cá nhân' navigates to /tinh-phi-bao-hiem/suc-khoe-ca-nhan", () => {
      cy.get("[data-cy=insurance-personal-health]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm sức khỏe cá nhân");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/suc-khoe-ca-nhan");
    });

    it("clicks 'Bảo hiểm bệnh ung thư' navigates to /tinh-phi-bao-hiem/benh-ung-thu", () => {
      cy.get("[data-cy=insurance-cancer]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm bệnh ung thư");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/benh-ung-thu");
    });

    it("clicks 'Bảo hiểm nhà tư nhân' navigates to /tinh-phi-bao-hiem/nha-tu-nhan", () => {
      cy.get("[data-cy=insurance-house]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm nhà tư nhân");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/nha-tu-nhan");
    });

    it("clicks 'Bảo hiểm xe máy' navigates to /tinh-phi-bao-hiem/xe-may", () => {
      cy.get("[data-cy=insurance-motorbike]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm xe máy");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/xe-may");
    });

    it("clicks 'Bảo hiểm du lịch quốc tế' navigates to /tinh-phi-bao-hiem/du-lich-quoc-te", () => {
      cy.get("[data-cy=insurance-travel]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm du lịch quốc tế");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/du-lich-quoc-te");
    });

    it("clicks 'Bảo hiểm nhân thọ' navigates to /tinh-phi-bao-hiem/nhan-tho", () => {
      cy.get("[data-cy=insurance-life]")
        .should(($el) => {
          expect($el.text()).to.include("Bảo hiểm nhân thọ");
        })
        .click({ force: true });
      cy.url().should("include", "/tinh-phi-bao-hiem/nhan-tho");
    });
  });
});
