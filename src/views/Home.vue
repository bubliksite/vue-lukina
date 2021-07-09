<template>
  <div>
    <Loader v-if="loader || mediaLoader" />
    <div v-else class="page">
      <Header />
      <VideoBackground v-if="media" :src="media.source_url" />
    </div>
  </div>
</template>

<script>
  import VideoBackground from '../components/VideoBackground'
  import Loader from '../components/Loader'
  import Header from '../components/Header'
  import {mapState} from 'vuex'
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import {actionTypes as mediaActionTypes} from '../store/modules/getMedia'

  export default {
    name: 'Home',
    components: {Header, Loader, VideoBackground},
    computed: {
      ...mapState({
        page: (state) => state.homePage.page,
        loader: (state) => state.homePage.isLoading,
        errorsPage: (state) => state.homePage.errors,
        media: (state) => state.getMedia.media,
        mediaLoader: (state) => state.getMedia.isLoading,
        errorsMedia: (state) => state.getMedia.errors
      })
    },
    mounted() {
      this.$store
        .dispatch(pageActionTypes.getPage, {
          pageId: 8
        })
        .then((response) => {
          this.$store.dispatch(mediaActionTypes.getMedia, {
            mediaId: response.homeVideo
          })
        })
    }
  }
</script>
