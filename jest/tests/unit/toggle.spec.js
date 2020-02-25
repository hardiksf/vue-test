import { mount } from "@vue/test-utils";
import Toggle from "@/components/Toggle.vue";
import Vue from "vue";

describe(`Toggle`, () => {
  const wrapper = mount(Toggle);

  it(`renders correct markup`, () => {
    expect(wrapper.text()).toContain(`blue`);
    expect(wrapper.html()).toContain(`<p class="toggle">`);
  });

  it(`checks the existence of button`, () => {
    expect(wrapper.contains(`button`)).toBe(true);
  });

  it(`checks that text is updated after click`, async () => {
    const button = wrapper.find(`button`);
    button.trigger(`click`);
    await Vue.nextTick();
    expect(wrapper.text()).toContain(`green`);
  });
});
