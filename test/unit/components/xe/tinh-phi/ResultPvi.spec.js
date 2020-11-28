import { shallowMount } from "@vue/test-utils";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";
import MockDate from "mockdate";

describe("ResultPvi.vue", () => {
  beforeAll(() => {
    MockDate.set(new Date(2020, 1, 1));
  });

  describe("carValue is < 500", () => {
    const carValue = 400;
    const thisYear = new Date().getFullYear();

    it("given carYear's gap from today <= 3, renders 1.7% carValue", () => {
      const wrapper = shallowMount(ResultPvi, {
        propsData: {
          carValue,
          carYear: thisYear - 3
        }
      });
      const expectInsuranceValue = (carValue * 1.7) / 100;
      expect(wrapper.text()).toContain(expectInsuranceValue);
    });

    it("given carYear's gap from today > 3 & <=6, renders 2.05% carValue", () => {
      const wrapper = shallowMount(ResultPvi, {
        propsData: {
          carValue,
          carYear: thisYear - 4
        }
      });
      const expectInsuranceValue = (carValue * 2.05) / 100;
      expect(wrapper.text()).toContain(expectInsuranceValue);
    });

    it("given carYear's gap from today >= 6, renders 2.35% carValue", () => {
      const wrapper = shallowMount(ResultPvi, {
        propsData: {
          carValue,
          carYear: thisYear - 7
        }
      });
      const expectInsuranceValue = (carValue * 2.35) / 100;
      expect(wrapper.text()).toContain(expectInsuranceValue);
    });
  });
});
