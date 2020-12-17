import { mount } from "@vue/test-utils";
import HomeRoundedButtonContainer from "@/components/home/HomeRoundedButtonContainer.vue";

describe("HomeRoundedButtonContainer.vue", () => {
  it("matches snapshot", () => {
    const wrapper = mount(HomeRoundedButtonContainer, {
      slots: {
        default: "<div>Slot content</div>"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
