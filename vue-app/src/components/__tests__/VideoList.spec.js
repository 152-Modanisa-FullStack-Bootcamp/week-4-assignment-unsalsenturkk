import {shallowMount} from "@vue/test-utils";
import VideoList from "@/components/VideoList";
import VideoItem from "@/components/VideoItem";
import API from "@/api";
import flushPromises from "flush-promises";

const mockResponse = [
    {
        "id": 1,
        "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
        "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
        "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
        "title": "Vue.js Course for Beginners [2021 Tutorial]",
        "viewCount": 254,
        "publishDateInMonth": 4,
        "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
        "ownerName": "freeCodeCamp.org",
        "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
    },
    {
        "id": 2,
        "videoAddress": "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
        "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-cover.webp",
        "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-hover.webp",
        "title": "Vue JS Crash Course",
        "viewCount": 623,
        "publishDateInMonth": 10,
        "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj",
        "ownerName": "Traversy Media",
        "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course",
    },
]

jest.mock("@/api")

describe("VideoList.vue", () => {
    beforeAll(() => {
        API.getVideoList.mockResolvedValue(mockResponse)
    })
    describe("should check exists", () => {
        it('should VideoList component exists', async () => {
            const wrapper = await shallowMount(VideoList)
            expect(wrapper.exists()).toBeTruthy()
        });
        it('should Video component exists', async () => {

            const wrapper = shallowMount(VideoList)
            await flushPromises()
            const videoComponents = wrapper.findAllComponents(VideoItem)

            expect(videoComponents.exists()).toBeTruthy()
        });

    })

    describe("should render videolist components correctly", () => {
        it('should render video item components correctly with data', async () => {

            const wrapper = shallowMount(VideoList)
            await flushPromises();

            const videoComponents = wrapper.findAllComponents(VideoItem)
            expect(videoComponents).toHaveLength(mockResponse.length)
        });
    })
    describe("need to have some attributes",()=>{
        it('VideoList need to have id attribute', async () => {
            const wrapper = shallowMount(VideoList)

            expect(wrapper.attributes('id')).toBe('videoList')
        });
        it('video item need to have class attribute', async () =>{
            const wrapper = shallowMount(VideoList)
            await flushPromises();
            const videoItem = wrapper.findComponent(VideoItem)

            expect(videoItem.attributes('class')).toBe("video-list-item")

        });
    })


})