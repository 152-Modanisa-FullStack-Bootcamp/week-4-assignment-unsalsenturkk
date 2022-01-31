import {createLocalVue, shallowMount} from "@vue/test-utils";
import videoItem from "@/components/VideoItem";

describe("VideoItem.vue", () => {
    describe("should check exists", () => {
        it("should Video component exists", () => {
            const wrapper = shallowMount(videoItem, {
                propsData: {
                    video: {
                        "title": "Vue.js Course for Beginners [2021 Tutorial]",
                    }
                }
            })

            expect(wrapper.exists()).toBeTruthy()
        })
        it("video component must have video prop", () => {
            const wrapper = shallowMount(videoItem, {
                propsData: {
                    video: {
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
                    }
                }
            })
            expect(wrapper.props().video.id).toBe(1)
            expect(wrapper.props().video.title).toBe("Vue.js Course for Beginners [2021 Tutorial]")

        })
    })
    it("should render videos correctly", () => {
        const wrapper = shallowMount(videoItem, {
            propsData: {
                video: {
                    "title": "Vue.js Course for Beginners [2021 Tutorial]",
                }
            }
        })
    })

    describe("need to have some attributes", () => {
        it('video item need to have title attribute', () => {
            const wrapper = shallowMount(videoItem, {
                propsData: {
                    video: {
                        "title": "Vue.js Course for Beginners [2021 Tutorial]",
                    }
                }
            })
            const title = wrapper.find('#title')
            expect(title.exists()).toBeTruthy()
        });
        it('video item need to have img attribute', () => {
            const wrapper = shallowMount(videoItem, {
                propsData: {
                    video: {
                        "title": "Vue.js Course for Beginners [2021 Tutorial]",
                        "img" : "test"
                    }
                }
            })
            const img = wrapper.find('#img')
            expect(img.exists()).toBeTruthy()
        });
    })
    describe("video item component event test", () => {
        it('triggers a click ', async () => {
            //const spyVideoItemClick = jest.spyOn(videoItem.methods, 'videoItemClick')

            const wrapper = shallowMount(videoItem,
                {
                    propsData: {
                        video: {
                            "title": "Vue.js Course for Beginners [2021 Tutorial]",
                        }
                    }
                })

            wrapper.setMethods({
                videoItemClick: jest.fn()
            })
            await wrapper.find("#title").trigger("click")
            expect(wrapper.vm.videoItemClick).toHaveBeenCalled()
        });
        it('video item click event functionality test',  () => {
            const $router = {
                push:jest.fn()
            }
            const localThis = {
                $router
            }

            videoItem.methods.videoItemClick.call(localThis)
            expect(localThis.$router.push).toBeCalled()

        });
    })
})