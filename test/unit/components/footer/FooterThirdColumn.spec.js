import { mount } from "@vue/test-utils";
import FooterThirdColumn from "@/components/footer/FooterThirdColumn.vue";

describe("FooterThirdColumn.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(FooterThirdColumn);
    expect(wrapper.element).toMatchSnapshot();
  });
});
