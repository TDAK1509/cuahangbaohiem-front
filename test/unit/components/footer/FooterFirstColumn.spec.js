import { mount } from "@vue/test-utils";
import FooterFirstColumn from "@/components/footer/FooterFirstColumn.vue";

describe("FooterFirstColumn.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(FooterFirstColumn);
    expect(wrapper.element).toMatchSnapshot();
  });
});
