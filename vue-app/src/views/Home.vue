<template>
  <div class="home">
   <video-list> </video-list>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoList from "@/components/VideoList";
export default {
  name: 'Home',
  components: {
    VideoList
  }
}
</script>
