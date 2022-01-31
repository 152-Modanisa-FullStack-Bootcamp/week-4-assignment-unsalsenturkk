import {shallowMount} from "@vue/test-utils";
import watch from "@/views/__tests__/Watch";

describe("Watch.vue test", () => {
    it('should watch exist', () => {
        const wrapper = shallowMount(watch)

        expect(wrapper.exists()).toBeTruthy()

    });
})