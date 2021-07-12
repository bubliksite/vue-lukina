<template>
  <div class="slider position-relative">
    <VideoBackground v-if="media" :src="media.source_url" />
    <div
      class="d-flex justify-content-center align-items-center position-absolute top-0 w-100 h-100"
    >
      <SlideContent :page="page" />
    </div>
  </div>
</template>

<script>
  import VideoBackground from '../components/VideoBackground'
  import SlideContent from './SlideContent'

  export default {
    name: 'Slider',
    props: {
      page: {
        type: Object,
        required: true
      },
      media: {
        type: Object,
        required: true
      }
    },
    components: {
      VideoBackground,
      SlideContent
    }
  }
</script>

<style scoped></style>
