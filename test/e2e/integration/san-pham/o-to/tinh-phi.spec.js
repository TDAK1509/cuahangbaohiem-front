describe("Page /san-pham/o-to", () => {
  beforeEach(() => {
    cy.visit("/san-pham/o-to");
    initAliases();
  });

  function initAliases() {
    cy.get("[data-cy=car-value]").as("carValue");
    cy.get("[data-cy=car-year]").as("carYear");
    cy.get("[data-cy=addons]").as("addons");
    cy.get("@addons").find(".radio").as("addonRadio");
    cy.get("[data-cy=calculate-button]").as("calculateButton");
  }

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

  describe("rendering", () => {
    it("should render enough inputs", () => {
      cy.get("@carValue").should("be.visible");
      cy.get("@carYear").should("be.visible");
      cy.get("@addons").should("be.visible");
    });

    it("should render Calculate button", () => {
      cy.get("@calculateButton").should("be.visible");
    });

    it("addons should have 6 radios", () => {
      cy.get("@addonRadio").should("have.length", 6);
      cy.get("@addonRadio").eq(0).should("contain", "DKBS_006");
      cy.get("@addonRadio").eq(1).should("contain", "DKBS_006_007");
      cy.get("@addonRadio").eq(2).should("contain", "DKBS_006_008");
      cy.get("@addonRadio").eq(3).should("contain", "DKBS_006_007_008");
      cy.get("@addonRadio").eq(4).should("contain", "DKBS_003_006_007");
      cy.get("@addonRadio").eq(5).should("contain", "DKBS_003_006_007_008");
    });

    it("disable all addons if year gap > 20", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 21;
      cy.get("@carYear").type(targetYear.toString());
      cy.get("@addonRadio").eq(0).find("input:disabled").should("be.visible");
      cy.get("@addonRadio").eq(1).find("input:disabled").should("be.visible");
      cy.get("@addonRadio").eq(2).find("input:disabled").should("be.visible");
      cy.get("@addonRadio").eq(3).find("input:disabled").should("be.visible");
      cy.get("@addonRadio").eq(4).find("input:disabled").should("be.visible");
      cy.get("@addonRadio").eq(5).find("input:disabled").should("be.visible");
    });
  });

  describe.skip("on click calculate button", () => {
    describe.skip("form error handling", () => {
      describe("carValue", () => {
        it("if car value is empty, shows HTML5 required validation", () => {
          cy.get("@carValue").should(assertFailedHtml5FormValidation);
        });

        it("if car value is not a number, shows HTML5 required validation", () => {
          const errorNotANumber = "Vui lòng điền một con số.";

          cy.get("@carValue")
            .type("not a number")
            .should(($el) => {
              assertFailedHtml5FormValidationWithMessage($el, errorNotANumber);
            });
        });
      });

      describe("carYear", () => {
        it("if car year is empty, shows HTML5 required validation", () => {
          cy.get("@carYear").should(assertFailedHtml5FormValidation);
        });

        it("if car year is not a number, shows HTML5 required validation", () => {
          const errorInvalidYear = "Năm sản xuất không hợp lệ.";

          cy.get("@carYear")
            .type("not a number")
            .should(($el) => {
              assertFailedHtml5FormValidationWithMessage($el, errorInvalidYear);
            });
        });
      });
    });

    describe("form valid handling", () => {
      it("shows result if car value not empty", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.get("@calculateButton").click();
        assertResultBlockIsRendered();
      });

      it("results show 4 insurance brands with correct insurance values and 4 BUY buttons", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.get("@calculateButton").click();

        assertPviinsuranceFee("150.000.000");
        assertBaoVietinsuranceFee("150.000.000");
        assertBaoMinhinsuranceFee("150.000.000");
        assertMicinsuranceFee("150.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick first addon shows results with correct value", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.contains("Option 1").click();
        cy.get("@calculateButton").click();

        assertPviinsuranceFee("121.000.000");
        assertBaoVietinsuranceFee("121.000.000");
        assertBaoMinhinsuranceFee("121.000.000");
        assertMicinsuranceFee("121.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick second addon shows results with correct value", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.contains("Option 2").click();
        cy.get("@calculateButton").click();

        assertPviinsuranceFee("122.000.000");
        assertBaoVietinsuranceFee("122.000.000");
        assertBaoMinhinsuranceFee("122.000.000");
        assertMicinsuranceFee("122.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("tick both addons shows results with correct value", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.contains("Option 1").click();
        cy.contains("Option 2").click();
        cy.get("@calculateButton").click();

        assertPviinsuranceFee("123.000.000");
        assertBaoVietinsuranceFee("123.000.000");
        assertBaoMinhinsuranceFee("123.000.000");
        assertMicinsuranceFee("123.000.000");
        assertResultShows4BuyButtons();
      });

      it.skip("reselecting addons works", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.contains("Option 1").click();
        cy.get("@calculateButton").click();

        assertPviinsuranceFee("121.000.000");
        assertBaoVietinsuranceFee("121.000.000");
        assertBaoMinhinsuranceFee("121.000.000");
        assertMicinsuranceFee("121.000.000");
        assertResultShows4BuyButtons();

        cy.contains("Option 1").click();
        cy.contains("Option 2").click();
        cy.get("@calculateButton").click();
        assertPviinsuranceFee("122.000.000");
        assertBaoVietinsuranceFee("122.000.000");
        assertBaoMinhinsuranceFee("122.000.000");
        assertMicinsuranceFee("122.000.000");
        assertResultShows4BuyButtons();
      });
    });
  });

  describe.skip("On click BUY button", () => {
    describe("without addon", () => {
      beforeEach(() => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.get("@calculateButton").click();
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
          cy.contains("addon:").should("be.visible");
          cy.contains("150000000").should("be.visible");
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
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        cy.get("@calculateButton").click();
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
        cy.contains("addon:").should("be.visible");
        cy.contains("insuranceFee: 150000000").should("be.visible");
      });
    });
  });
});

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

function assertPviinsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(0)
    .invoke("text")
    .should("include", "PVI")
    .should("include", value);
}

function assertBaoVietinsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(1)
    .invoke("text")
    .should("include", "Bảo Việt")
    .should("include", value);
}

function assertBaoMinhinsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(2)
    .invoke("text")
    .should("include", "Bảo Minh")
    .should("include", value);
}

function assertMicinsuranceFee(value) {
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
