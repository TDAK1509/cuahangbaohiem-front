import { mount } from "@vue/test-utils";
import FooterSecondColumn from "@/components/footer/FooterSecondColumn.vue";

describe("FooterSecondColumn.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(FooterSecondColumn);
    expect(wrapper.element).toMatchSnapshot();
  });
});
