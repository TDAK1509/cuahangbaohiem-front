import { mount } from "@vue/test-utils";
import TheFooter from "@/components/footer/TheFooter.vue";

describe("TheFooter.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TheFooter);
    expect(wrapper.element).toMatchSnapshot();
  });
});
