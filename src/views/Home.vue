<template>
  <div>
    <Loader v-if="loader" />
    <div v-else>
      <Header />
      <Slider v-if="page && media" :page="page" :media="media" />
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Loader from '../components/Loader'
  import {mapState} from 'vuex'
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import {actionTypes as mediaActionTypes} from '../store/modules/getMedia'
  import Slider from '../components/Slider'

  export default {
    name: 'Home',
    components: {Slider, Loader, Header},
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

<style scoped lang="scss"></style>
