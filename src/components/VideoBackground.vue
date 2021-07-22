<template>
  <div class="video-background">
    <div v-if="playingVideo" class="video-controls">
      <div class="disabled">
        <Icon :src="playDisabled" />
      </div>
      <div @click.prevent="pauseVideo" role="button">
        <Icon :src="pauseActive" />
      </div>
    </div>
    <div v-else class="video-controls">
      <div @click.prevent="playVideo" role="button">
        <Icon :src="playActive" />
      </div>
      <div class="disabled">
        <Icon :src="pauseDisabled" />
      </div>
    </div>
    <video
      playsinline
      @ended="endedVideo"
      ref="videoBackground"
      :src="videoUrl"
    ></video>
  </div>
</template>

<script>
  import axios from '../api/axios'

  import Icon from './Icon'

  export default {
    name: 'VideoBackground',
    components: {Icon},
    props: {
      videoId: String,
      expandContent: Function,
      collapseContent: Function,
      contentIsCollapse: Boolean
    },
    data() {
      return {
        playActive: require('../assets/images/icons/icon-play-active.svg'),
        pauseActive: require('../assets/images/icons/icon-pause-active.svg'),
        playDisabled: require('../assets/images/icons/icon-play-disabled.svg'),
        pauseDisabled: require('../assets/images/icons/icon-pause-disabled.svg'),
        playingVideo: false,
        loader: true,
        videoUrl: '',
        postUrl: ''
      }
    },
    mounted() {
      this.getMedia(this.videoId)
    },
    methods: {
      getMedia(mediaId) {
        this.loader = true
        axios
          .get(`/media/${mediaId}`)
          .then((response) => (this.videoUrl = response.data.source_url))
          .then(() => (this.loader = false))
      },
      playVideo() {
        this.$refs.videoBackground.play()
        this.collapseContent()
        this.playingVideo = true
      },
      pauseVideo() {
        this.$refs.videoBackground.pause()
        this.expandContent()
        this.playingVideo = false
      },
      endedVideo() {
        this.expandContent()
        this.playingVideo = false
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
      &[poster] {
        object-fit: cover;
        height: 100%;
      }
    }
    .video-controls {
      z-index: 3;
      position: absolute;
      bottom: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      .disabled {
        opacity: 0.5;
      }
      img {
        margin: 0.1rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .owl-theme .owl-dots {
      bottom: 1.5rem;
      z-index: 2;
      .owl-dot {
        span {
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 740px) {
    .video-background {
      video {
        min-height: 50vh;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .video-background {
      .video-controls {
        bottom: 2.8rem;
      }
    }
    .owl-theme .owl-dots {
      bottom: 0.5rem;
      .owl-dot {
        span {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
</style>
