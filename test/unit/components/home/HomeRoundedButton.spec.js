import { mount } from "@vue/test-utils";
import HomeRoundedButton from "@/components/home/HomeRoundedButton.vue";

describe("HomeRoundedButton.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(HomeRoundedButton, {
      propsData: {
        to: "/to-link",
        label: "Label",
        iconClass: "icon-class",
        iconColorClass: "icon-color-class"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
