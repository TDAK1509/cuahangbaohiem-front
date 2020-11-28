import { shallowMount } from "@vue/test-utils";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";

describe("ResultPvi.vue", () => {
  it("given props carValue 400, carYear 2019, thisYear 2020, renders 1.7% carValue", () => {
    const wrapper = shallowMount(ResultPvi, {
      propsData: {
        carValue: 400,
        carYear: 2019
      }
    });
    const expectInsuranceValue = (400 * 1.7) / 100;
    expect(wrapper.text()).toContain(expectInsuranceValue);
  });
});
