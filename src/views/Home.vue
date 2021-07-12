<template>
  <div>
    <Loader v-if="loader" />
    <div v-else>
      <Header />
      <Slider v-if="page" :page="page" />
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Loader from '../components/Loader'
  import {mapState} from 'vuex'
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import Slider from '../components/Slider'

  export default {
    name: 'Home',
    components: {Slider, Loader, Header},
    computed: {
      ...mapState({
        page: (state) => state.homePage.page,
        loader: (state) => state.homePage.isLoading,
        errorsPage: (state) => state.homePage.errors
      })
    },
    mounted() {
      this.$store.dispatch(pageActionTypes.getPage, {
        pageId: 8
      })
      console.log(this.media)
    }
  }
</script>

<style scoped lang="scss"></style>
