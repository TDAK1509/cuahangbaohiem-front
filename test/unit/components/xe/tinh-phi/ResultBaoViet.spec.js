import { shallowMount } from "@vue/test-utils";
import ResultBaoViet from "@/components/xe/tinh-phi/ResultBaoViet.vue";
import MockDate from "mockdate";

describe("ResultBaoViet.vue", () => {
  describe("Insurance Value", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    const thisYear = new Date().getFullYear();

    describe("carValue is < 500", () => {
      const carValue = 400;

      it("given carYear's gap from today <= 3, returns 2.2825% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 2.2825) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 2.5795% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 2.5795) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 2.6785% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 2.6785) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("500 <= carValue < 700", () => {
      const carValue = 600;

      it("given carYear's gap from today <= 3, returns 2.0185% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 2.0185) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 2.3045% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 2.3045) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 2.4365% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 2.4365) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("carValue >= 700", () => {
      const carValue = 800;

      it("given carYear's gap from today <= 3, returns 1.5345% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.5345) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.7325% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.7325) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 2.2055% carValue", () => {
        const wrapper = shallowMount(ResultBaoViet, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 2.2055) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });
  });
});
