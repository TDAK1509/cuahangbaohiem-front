import { mount } from "@vue/test-utils";
import HomePage from "@/pages/index.vue";

describe("pages/index.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(HomePage);
    expect(wrapper.element).toMatchSnapshot();
  });
});
