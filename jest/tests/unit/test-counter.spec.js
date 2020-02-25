import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import Vue from "vue";

describe(`Counter`, () => {
  const wrapper = mount(Counter);

  it(`renders correct markup`, () => {
    expect(wrapper.html()).toContain(`<p class="counter">0</p>`);
    expect(wrapper.text()).toContain(`0`);
  });

  it(`checks the existence of button`, () => {
    expect(wrapper.contains(`button`)).toBe(true);
  });

  it(`checks that button click increments counter`, () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find(`button`);
    button.trigger(`click`);
    expect(wrapper.vm.count).toBe(1);
  });

  it(`checks that count text is updated after click`, async () => {
    const button = wrapper.find(`button`);
    button.trigger(`click`);
    await Vue.nextTick();
    expect(wrapper.text()).toContain(`2`); //2 because it was incremented by 1 above
  });
});
