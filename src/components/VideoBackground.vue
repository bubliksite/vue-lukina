<template>
  <div class="video-background">
    <div class="video-controls">
      <div @click.prevent="playVideo" role="button">
        <Icon :src="play" />
      </div>
      <div @click.prevent="pauseVideo" role="button">
        <Icon :src="pause" />
      </div>
    </div>
    <video ref="videoBackground" :src="src"></video>
  </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'VideoBackground',
    components: {Icon},
    props: {
      src: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        play: require('../assets/images/icons/icon-play.svg'),
        pause: require('../assets/images/icons/icon-pause.svg')
      }
    },
    methods: {
      playVideo() {
        this.$refs.videoBackground.play()
      },
      pauseVideo() {
        this.$refs.videoBackground.pause()
      }
    }
  }
</script>

<style lang="scss">
  .video-background {
    position: relative;
    video {
      width: 100vw;
      max-height: 100vh;
      object-fit: cover;
    }
    .video-controls {
      z-index: 3;
      position: absolute;
      bottom: 1.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
