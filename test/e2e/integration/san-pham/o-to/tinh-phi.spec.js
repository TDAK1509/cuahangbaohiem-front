describe("Page /san-pham/o-to", () => {
  beforeEach(() => {
    cy.visit("/san-pham/o-to");
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

    it("clicks QUYEN LOI goes to /san-pham/o-to/quyen-loi", () => {
      cy.contains("QUYỀN LỢI").click();
      cy.url().should("include", "/san-pham/o-to/quyen-loi");
    });

    it("clicks BỒI THƯỜNG to /san-pham/o-to/boi-thuong", () => {
      cy.contains("BỒI THƯỜNG").click();
      cy.url().should("include", "/san-pham/o-to/boi-thuong");
    });

    it("clicks KHUYẾN MÃI to /san-pham/o-to/khuyen-mai", () => {
      cy.contains("KHUYẾN MÃI").click();
      cy.url().should("include", "/san-pham/o-to/khuyen-mai");
    });

    it("clicks TÀI LIỆU MẪU goes to /san-pham/o-to/tai-lieu-mau", () => {
      cy.contains("TÀI LIỆU MẪU").click();
      cy.url().should("include", "/san-pham/o-to/tai-lieu-mau");
    });

    it("clicks TÍNH PHÍ & ĐẶT MUA to /san-pham/o-to", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").click();
      cy.url().should("match", /\/san-pham\/o-to\/?$/);
    });
  });

  describe.skip("rendering", () => {
    it("should render enough inputs", () => {
      cy.get("[data-cy=car-value]").should("be.visible");
      getCarYearField().should("be.visible");
      cy.get("[data-cy=addons]").should("be.visible");
    });

    it("should render Calculate button", () => {
      getCalculateButton().should("be.visible");
    });

    it("addons should have 1 checkboxes", () => {
      cy.get("[data-cy=addons]")
        .get("input[type=checkbox]")
        .should("have.length", 1);
    });
  });

  describe("on click calculate button", () => {
    describe.skip("form error handling", () => {
      describe("carValue", () => {
        it("if car value is empty, shows HTML5 required validation", () => {
          getCarValueField().should(assertFailedHtml5FormValidation);
        });

        it("if car value is not a number, shows HTML5 required validation", () => {
          const errorNotANumber = "Vui lòng điền một con số.";

          getCarValueField()
            .type("not a number")
            .should(($el) => {
              assertFailedHtml5FormValidationWithMessage($el, errorNotANumber);
            });
        });
      });

      describe("carYear", () => {
        it("if car year is empty, shows HTML5 required validation", () => {
          getCarYearField().should(assertFailedHtml5FormValidation);
        });

        it("if car year is not a number, shows HTML5 required validation", () => {
          const errorInvalidYear = "Năm sản xuất không hợp lệ.";

          getCarYearField()
            .type("not a number")
            .should(($el) => {
              assertFailedHtml5FormValidationWithMessage($el, errorInvalidYear);
            });
        });
      });
    });

    describe("form valid handling", () => {
      it("shows result if car value not empty", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        getCalculateButton().click();
        assertResultBlockIsRendered();
      });

      it("results show 4 insurance brands with correct insurance values and 4 BUY buttons", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        getCalculateButton().click();

        assertPviInsuranceValue("960.000.000");
        assertBaoVietInsuranceValue("960.000.000");
        assertBaoMinhInsuranceValue("960.000.000");
        assertMicInsuranceValue("960.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick first addon shows results with correct value", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        cy.contains("Option 1").click();
        getCalculateButton().click();

        assertPviInsuranceValue("121.000.000");
        assertBaoVietInsuranceValue("121.000.000");
        assertBaoMinhInsuranceValue("121.000.000");
        assertMicInsuranceValue("121.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick second addon shows results with correct value", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        cy.contains("Option 2").click();
        getCalculateButton().click();

        assertPviInsuranceValue("122.000.000");
        assertBaoVietInsuranceValue("122.000.000");
        assertBaoMinhInsuranceValue("122.000.000");
        assertMicInsuranceValue("122.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick both addons shows results with correct value", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        cy.contains("Option 1").click();
        cy.contains("Option 2").click();
        getCalculateButton().click();

        assertPviInsuranceValue("123.000.000");
        assertBaoVietInsuranceValue("123.000.000");
        assertBaoMinhInsuranceValue("123.000.000");
        assertMicInsuranceValue("123.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("reselecting addons works", () => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        cy.contains("Option 1").click();
        getCalculateButton().click();

        assertPviInsuranceValue("121.000.000");
        assertBaoVietInsuranceValue("121.000.000");
        assertBaoMinhInsuranceValue("121.000.000");
        assertMicInsuranceValue("121.000.000");
        assertResultShows4BuyButtons();

        cy.contains("Option 1").click();
        cy.contains("Option 2").click();
        getCalculateButton().click();
        assertPviInsuranceValue("122.000.000");
        assertBaoVietInsuranceValue("122.000.000");
        assertBaoMinhInsuranceValue("122.000.000");
        assertMicInsuranceValue("122.000.000");
        assertResultShows4BuyButtons();
      });
    });
  });

  describe("On click BUY button", () => {
    describe("without addon", () => {
      beforeEach(() => {
        getCarValueField().type("100");
        getCarYearField().type("2020");
        getCalculateButton().click();
        getResultBuyButton().first().click();
      });

      describe("rendering", () => {
        it("shows popup with inputs name, email, phone, note, CANCEL button and BUY button", () => {
          getPopup().should("be.visible");
          getVisiblePopup().should("have.length", 1);
          getPopupName().should("be.visible");
          getPopupEmail().should("be.visible");
          getPopupPhone().should("be.visible");
          getPopupNote().should("be.visible");
          // exist instead of visible because need to scroll down
          getPopupBuyButton().should("be.exist");
          getPopupCancelButton().should("be.exist");
        });
      });

      describe("form error handling", () => {
        it("if name is empty, shows HTML5 required validation", () => {
          getPopupName().should(assertFailedHtml5FormValidation);
        });

        it("if name contains number, shows HTML5 required validation", () => {
          getPopupName()
            .type("123Michael Jackson")
            .should(assertFailedHtml5FormValidation);
        });

        it("if email is empty, shows HTML5 required validation", () => {
          getPopupEmail().should(assertFailedHtml5FormValidation);
        });

        it("if email is not correctly formatted, shows HTML5 error", () => {
          getPopupEmail()
            .type("invalid-email")
            .should(assertFailedHtml5FormValidation);
        });

        it("if phone is empty, shows HTML5 required validation", () => {
          getPopupPhone().should(assertFailedHtml5FormValidation);
        });

        it("if phone contains letters, shows HTML5 error", () => {
          getPopupPhone()
            .type("invalidPhone123")
            .should(assertFailedHtml5FormValidation);
        });
      });

      describe("closing popup", () => {
        it("on click CLOSE button", () => {
          getVisiblePopup().should("be.visible");
          getPopupCancelButton().click();
          getPopup().should("not.be.exist");
        });

        it("on press ESC close popup", () => {
          getVisiblePopup().should("be.visible");
          getPopupEmail().type("{esc}");
          getPopup().should("not.be.exist");
        });
      });

      describe("submitting form successfully", () => {
        it("shows success message and clear inputs", () => {
          getPopupName().type("Michael Jackson");
          getPopupEmail().type("test@gmail.com");
          getPopupPhone().type("1234567");
          getPopupBuyButton().click();
          cy.contains(
            "Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!"
          ).should("be.visible");
        });

        it("form request is saved to firebase", () => {
          cy.visit("/san-pham/o-to/test");
          cy.contains("Michael Jackson").should("be.visible");
          cy.contains("test@gmail.com").should("be.visible");
          cy.contains("1234567").should("be.visible");
          cy.contains("PVI").should("be.visible");
          cy.contains("carValue: 100000000").should("be.visible");
          cy.contains("carYear: 2020").should("be.visible");
          cy.contains("addons: []").should("be.visible");
          cy.contains("120000000").should("be.visible");
        });
      });
    });

    describe("form succeeds with addon", () => {
      it("shows success message and clear inputs", () => {
        calculateInsuranceWithAddOns();
        getPopupName().type("Son Tung MTP");
        getPopupEmail().type("sontung@gmail.com");
        getPopupPhone().type("111222333");
        getPopupBuyButton().click();
        cy.contains(
          "Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!"
        ).should("be.visible");
      });

      function calculateInsuranceWithAddOns() {
        getCarValueField().type("100");
        cy.contains("Từ 3 đến 6 năm").click();
        cy.contains("Option 1").click();
        getCalculateButton().click();
        getResultBuyButton().first().click();
      }

      it("form request is saved to firebase", () => {
        cy.visit("/san-pham/o-to/test");
        cy.contains("name: Son Tung MTP").should("be.visible");
        cy.contains("email: sontung@gmail.com").should("be.visible");
        cy.contains("phone: 111222333").should("be.visible");
        cy.contains("insuranceCompany: PVI").should("be.visible");
        cy.contains("carValue: 100000000").should("be.visible");
        cy.contains("carYear: 2020").should("be.visible");
        cy.contains('addons: [ "Option 1" ]').should("be.visible");
        cy.contains("insuranceValue: 131000000").should("be.visible");
      });
    });
  });
});

function getCarValueField() {
  return cy.get("[data-cy=car-value]");
}

function getCarYearField() {
  return cy.get("[data-cy=car-year]");
}

function getCalculateButton() {
  return cy.get("[data-cy=calculate-button]");
}

function getResultBuyButton() {
  return cy.get("[data-cy=buy-button]");
}

function getPopup() {
  return cy.get("[data-cy=buy-popup]");
}

function getVisiblePopup() {
  return cy.get("[data-cy=buy-popup]:visible");
}

function getPopupName() {
  return getVisiblePopup().find("[data-cy=name]");
}

function getPopupEmail() {
  return getVisiblePopup().find("[data-cy=email]");
}

function getPopupPhone() {
  return getVisiblePopup().find("[data-cy=phone]");
}

function getPopupNote() {
  return getVisiblePopup().find("[data-cy=note]");
}

function getPopupBuyButton() {
  return getVisiblePopup().find("[data-cy=popup-buy-button]");
}

function getPopupCancelButton() {
  return getVisiblePopup().find("[data-cy=popup-cancel-button]");
}

function assertResultBlockIsRendered() {
  cy.get("[data-cy=result]").should("be.visible");
}

function assertPviInsuranceValue(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(0)
    .invoke("text")
    .should("include", "PVI")
    .should("include", value);
}

function assertBaoVietInsuranceValue(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(1)
    .invoke("text")
    .should("include", "Bảo Việt")
    .should("include", value);
}

function assertBaoMinhInsuranceValue(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(2)
    .invoke("text")
    .should("include", "Bảo Minh")
    .should("include", value);
}

function assertMicInsuranceValue(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(3)
    .invoke("text")
    .should("include", "MIC")
    .should("include", value);
}

function assertResultShows4BuyButtons() {
  getResultBuyButton().should("have.length", 4);
}

function assertFailedHtml5FormValidation($el) {
  expect($el.get(0).checkValidity()).to.equal(false);
}

function assertFailedHtml5FormValidationWithMessage($el, message) {
  assertFailedHtml5FormValidation($el);
  expect($el.get(0).title).to.contain(message);
}
