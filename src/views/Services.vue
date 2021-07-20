<template>
  <div>
    <Loader v-if="loader" />
    <div v-else>
      <Header />
      <Slider v-if="homePage" :homePage="homePage" />
    </div>
  </div>
</template>

<script>
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import Loader from '../components/Loader'
  import Header from '../components/Header/Header'
  import Slider from '../components/Home/Slider'

  export default {
    name: 'Services',
    components: {Slider, Header, Loader},
    data() {
      return {
        homePage: '',
        loader: true
      }
    },
    created() {
      this.$store
        .dispatch(pageActionTypes.getPage, {
          pageId: 52
        })
        .then((response) => (this.homePage = response))
    },
    mounted() {
      this.loader = false
    }
  }
</script>

<style lang="scss"></style>
