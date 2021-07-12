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
    <video ref="videoBackground" :src="media.source_url"></video>
  </div>
</template>

<script>
  import {actionTypes as mediaActionTypes} from '../store/modules/getMedia'
  import Icon from './Icon'
  export default {
    name: 'VideoBackground',
    components: {Icon},
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        play: require('../assets/images/icons/icon-play.svg'),
        pause: require('../assets/images/icons/icon-pause.svg'),
        media: ''
      }
    },
    mounted() {
      this.$store
        .dispatch(mediaActionTypes.getMedia, {
          mediaId: this.id
        })
        .then((response) => (this.media = response))
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
  @import 'src/assets/styles/variables';
  .owl-theme .owl-dots .owl-dot:hover span {
    border-color: $text-yellow;
    background-color: $text-yellow;
    opacity: 0.5;
  }
  .owl-carousel .owl-item img {
    width: unset;
  }
  .owl-theme .owl-dots {
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    z-index: 2;
    .owl-dot {
      span {
        width: 15px;
        height: 15px;
        border: 1px solid #fff;
        background-color: transparent;
      }
      &.active {
        span {
          border-color: $text-yellow;
          background-color: $text-yellow;
        }
      }
    }
  }
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
      bottom: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
