import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import videoList from "@/components/VideoList";

describe("Home.vue", () => {

    describe("should check exist", () => {
        it('should Home component exists', () => {
            const wrapper = shallowMount(Home)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should VideoList component exists', () => {
            const wrapper = shallowMount(Home)
            const VideoListComponent = wrapper.findComponent(videoList)
            expect(VideoListComponent.exists()).toBeTruthy()
        });
    })
})