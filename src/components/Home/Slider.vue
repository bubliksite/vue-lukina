<template v-if="slider">
  <carousel :items="1">
    <div
      class="slide position-relative"
      v-for="(videoId, index) in slider.videoId"
      :key="index"
    >
      <Slide
        :videoId="videoId"
        :title="slider.title[index]"
        :subtitle="slider.subtitle[index]"
        :isShowButton="slider.isShowButton[index] === '1'"
      />
    </div>
  </carousel>
</template>

<script>
  import Slide from '../Slide'
  import carousel from 'vue-owl-carousel2'
  export default {
    name: 'Slider',
    components: {Slide, carousel},
    props: {
      slider: Object
    }
  }
</script>

<style lang="scss">
  .owl-theme .owl-nav {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    .owl-carousel .owl-item img {
      width: 25px;
      height: 25px;
    }
    .owl-carousel .owl-item .icon-collapse,
    .owl-carousel .owl-item .icon-expand {
      width: 18px;
    }
  }
  @media screen and (max-width: 420px) {
    .owl-carousel .owl-item img {
      width: 18px;
      height: 18px;
    }
    .owl-theme .owl-dots .owl-dot span {
      width: 10px;
      height: 10px;
    }
  }
</style>
