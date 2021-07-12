<template>
  <div class="slider">
    <carousel :items="1">
      <div
        class="slide position-relative"
        v-for="(slide, index) in page.customFields.homeVideo"
        :key="index"
      >
        <VideoBackground :id="slide" />
        <div
          class="
            d-flex
            justify-content-center
            align-items-center
            position-absolute
            top-0
            w-100
            h-100
          "
        >
          <SlideContent
            :title="page.customFields.homeTitle[index]"
            :subTitle="page.customFields.homeSubtitle[index]"
          />
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
  import carousel from 'vue-owl-carousel2'
  import VideoBackground from '../components/VideoBackground'
  import SlideContent from './SlideContent'

  export default {
    name: 'Slider',
    props: {
      page: {
        type: Object,
        required: true
      }
    },
    components: {
      VideoBackground,
      SlideContent,
      carousel
    }
  }
</script>

<style lang="scss">
  .owl-theme .owl-nav {
    display: none;
  }
</style>
