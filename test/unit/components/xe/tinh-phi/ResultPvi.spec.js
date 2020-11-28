import { shallowMount } from "@vue/test-utils";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";

describe("tinh-phi.vue", () => {
  it("is Vue instance", () => {
    const wrapper = shallowMount(ResultPvi);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
