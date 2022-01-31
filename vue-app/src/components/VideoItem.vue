<template>
  <div>
    <div
        id="title"
        @click = "videoItemClick"
    >
     {{video.title}}
    </div>
    <div
    >
      <img id="img" :src="!hoverImage ? video.coverImage : video.hoverImage" @mouseover="mousOver" @mouseleave="mousLeave"  >
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: {
      id: Number,
      videoAddress: String,
      coverImage: String,
      hoverImage: String,
      title: String,
      viewCount: Number,
      publishDateInMonth: Number,
      ownerImage: String,
      ownerName: String,
      description: String
    }
  },
  data() {
    return {
      hoverImage: false,
    }
  },
  methods : {
    videoItemClick(){
      this.$router.push({name: 'Watch', query: {v: 'bootcamp'}})
    },
    mousOver(){
      this.hoverImage = true
    },
    mousLeave(){
      this.hoverImage = false
    },
  },

}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>