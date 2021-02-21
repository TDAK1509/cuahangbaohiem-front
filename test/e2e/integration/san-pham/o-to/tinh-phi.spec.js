describe("Page /san-pham/o-to", () => {
  beforeEach(() => {
    cy.visit("/san-pham/o-to");
    initAliases();
  });

  function initAliases() {
    cy.get("[data-cy=car-value]").as("carValue");
    cy.get("[data-cy=car-year]").as("carYear");
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

  describe.skip("rendering", () => {
    it("shows input car value and year, calculate button, NOT show addons", () => {
      cy.get("@carValue").should("be.visible");
      cy.get("@carYear").should("be.visible");
      cy.contains("Điều kiện bổ sung").should("be.visible");
      assertNoAddOnMessageIsRendered();
      cy.get("@calculateButton").should("be.visible");
    });

    function assertNoAddOnMessageIsRendered() {
      getAddOns().should("not.exist");
      cy.contains(
        "Tình trạng xe của bạn không có hỗ trợ điều kiện bổ sung"
      ).should("be.visible");
    }

    it("show all radios if 3 < year gap <= 6", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 4;
      cy.get("@carYear").type(targetYear.toString());
      getAddOns().should("be.visible");

      getAddOnRadios().should("have.length", 7);
      getAddOnRadios().eq(0).should("contain", "Không");
      getAddOnRadios().eq(1).should("contain", "DKBS_006");
      getAddOnRadios().eq(2).should("contain", "DKBS_006_007");
      getAddOnRadios().eq(3).should("contain", "DKBS_006_008");
      getAddOnRadios().eq(4).should("contain", "DKBS_006_007_008");
      getAddOnRadios().eq(5).should("contain", "DKBS_003_006_007");
      getAddOnRadios().eq(6).should("contain", "DKBS_003_006_007_008");
    });

    it("shows all radios if yearGap <= 3", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 1;
      cy.get("@carYear").type(targetYear.toString());
      getAddOns().should("be.visible");

      getAddOnRadios().should("have.length", 7);
      getAddOnRadios().eq(0).should("contain", "Không");
      getAddOnRadios().eq(1).should("contain", "DKBS_006");
      getAddOnRadios().eq(2).should("contain", "DKBS_006_007");
      getAddOnRadios().eq(3).should("contain", "DKBS_006_008");
      getAddOnRadios().eq(4).should("contain", "DKBS_006_007_008");
      getAddOnRadios().eq(5).should("contain", "DKBS_003_006_007");
      getAddOnRadios().eq(6).should("contain", "DKBS_003_006_007_008");
    });

    it("shows no-addon message if year gap > 20", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 21;
      cy.get("@carYear").type(targetYear.toString());
      assertNoAddOnMessageIsRendered();
    });

    it("shows no-addon message if 15 < year gap <= 20", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 16;
      cy.get("@carYear").type(targetYear.toString());
      assertNoAddOnMessageIsRendered();
    });

    it("only shows NONE and DKBS_6 radios if 10 < year gap <= 15", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 11;
      cy.get("@carYear").type(targetYear.toString());
      getAddOns().should("be.visible");

      getAddOnRadios().should("have.length", 2);
      getAddOnRadios().eq(0).should("contain", "Không");
      getAddOnRadios().eq(1).should("contain", "DKBS_006");
    });

    it("shows 5 radios if 6 < year gap <= 10", () => {
      const thisYear = new Date().getFullYear();
      const targetYear = thisYear - 7;
      cy.get("@carYear").type(targetYear.toString());
      getAddOns().should("be.visible");

      getAddOnRadios().should("have.length", 5);
      getAddOnRadios().eq(0).should("contain", "Không");
      getAddOnRadios().eq(1).should("contain", "DKBS_006");
      getAddOnRadios().eq(2).should("contain", "DKBS_006_007");
      getAddOnRadios().eq(3).should("contain", "DKBS_006_008");
      getAddOnRadios().eq(4).should("contain", "DKBS_006_007_008");
    });
  });

  describe("on click calculate button", () => {
    describe.skip("form error handling", () => {
      describe("carValue", () => {
        it("if car value is empty, show HTML5 required validation", () => {
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

    describe.skip("form valid handling", () => {
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

        assertPviInsuranceFee("1.500.000");
        assertBaoVietInsuranceFee("150.000.000");
        assertBaoMinhInsuranceFee("150.000.000");
        assertMicInsuranceFee("150.000.000");
        assertResultShows4BuyButtons();
      });

      it("tick DKBS_006_007 addon shows results with correct value", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        getAddOnRadios().eq(2).click();
        cy.get("@calculateButton").click();

        assertPviInsuranceFee("1.600.000");
        assertBaoVietInsuranceFee("160.000.000");
        assertBaoMinhInsuranceFee("160.000.000");
        assertMicInsuranceFee("160.000.000");
        assertResultShows4BuyButtons();
      });

      it("reselecting addons works", () => {
        cy.get("@carValue").type("100");
        cy.get("@carYear").type("2020");
        getAddOnRadios().eq(2).click();
        cy.get("@calculateButton").click();

        assertPviInsuranceFee("1.600.000");
        assertBaoVietInsuranceFee("160.000.000");
        assertBaoMinhInsuranceFee("160.000.000");
        assertMicInsuranceFee("160.000.000");
        assertResultShows4BuyButtons();

        getAddOnRadios().eq(0).click();
        cy.get("@calculateButton").click();
        assertPviInsuranceFee("1.500.000");
        assertBaoVietInsuranceFee("150.000.000");
        assertBaoMinhInsuranceFee("150.000.000");
        assertMicInsuranceFee("150.000.000");
        assertResultShows4BuyButtons();
      });
    });
  });

  describe("On click BUY button", () => {
    describe.skip("without addon", () => {
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
          cy.contains("1500000").should("be.visible");
        });
      });
    });

    describe("with addon", () => {
      const thisYear = new Date().getFullYear();

      describe("without changing car year", () => {
        const targetYear = thisYear - 1;

        it("shows success message and clear inputs", () => {
          calculateInsuranceFeeWithAddOns();
          getPopupName().type("Son Tung MTP");
          getPopupEmail().type("sontung@gmail.com");
          getPopupPhone().type("111222333");
          getPopupBuyButton().click();
          cy.contains(
            "Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!"
          ).should("be.visible");
        });

        function calculateInsuranceFeeWithAddOns() {
          cy.get("@carValue").type("100");
          cy.get("@carYear").type(targetYear.toString());
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
          cy.contains(`carYear: ${targetYear}`).should("be.visible");
          cy.contains("addon:").should("be.visible");
          cy.contains("insuranceFee: 1500000").should("be.visible");
        });
      });

      describe("select addon and change car year", () => {
        const yearHavingAddons = thisYear - 1;
        const yearNotHavingAddons = thisYear - 30;

        it("select addons, then change car year, final result does not save addon", () => {
          cy.get("@carValue").type("100");
          selectAddonAndChangeCarYearToMakeItDisappear();
          cy.get("@calculateButton").click();
          getResultBuyButton().first().click();

          getPopupName().type("Son Tung MTP");
          getPopupEmail().type("sontung@gmail.com");
          getPopupPhone().type("111222333");
          getPopupBuyButton().click();
          cy.contains(
            "Cám ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!"
          ).should("be.visible");
        });

        function selectAddonAndChangeCarYearToMakeItDisappear() {
          cy.get("@carYear").type(yearHavingAddons.toString());
          getAddOnRadios().eq(4).click();
          cy.get("@carYear").clear().type(yearNotHavingAddons.toString());
        }

        it("form request is saved to firebase", () => {
          cy.visit("/san-pham/o-to/test");
          cy.contains("name: Son Tung MTP").should("be.visible");
          cy.contains("email: sontung@gmail.com").should("be.visible");
          cy.contains("phone: 111222333").should("be.visible");
          cy.contains("insuranceCompany: PVI").should("be.visible");
          cy.contains("carValue: 100000000").should("be.visible");
          cy.contains(`carYear: ${yearNotHavingAddons}`).should("be.visible");
          cy.contains("addon:").should("be.visible");
          cy.contains("insuranceFee: 1500000").should("be.visible");
        });
      });
    });
  });
});

function getAddOns() {
  return cy.get("[data-cy=addons]");
}

function getAddOnRadios() {
  return getAddOns().find(".radio");
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

function assertPviInsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(0)
    .invoke("text")
    .should("include", "PVI")
    .should("include", value);
}

function assertBaoVietInsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(1)
    .invoke("text")
    .should("include", "Bảo Việt")
    .should("include", value);
}

function assertBaoMinhInsuranceFee(value) {
  cy.get("[data-cy=insurance-result]")
    .eq(2)
    .invoke("text")
    .should("include", "Bảo Minh")
    .should("include", value);
}

function assertMicInsuranceFee(value) {
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
