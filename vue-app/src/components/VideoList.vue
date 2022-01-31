<template>
  <div
      id="videoList"
  >
    <div
        v-for="video of videos"
        :key="video.id"
    >
      <VideoItem
          class="video-list-item"
          :video="video"
      >
      </VideoItem>
    </div>
  </div>
</template>

<script>
import VideoItem from "@/components/VideoItem";
import API from "@/api";

export default {
  name: "VideoList.vue",
  data() {
    return {
      videos: []
    }
  },
  components: {
    VideoItem
  },
  async created() {
    this.videos = await API.getVideoList()
  },

}
</script>

<style scoped>

</style>