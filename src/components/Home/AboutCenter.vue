<template>
  <div class="row py-5">
    <div class="col-md-6">
      <p v-html="description"></p>
    </div>
    <div class="col-md-6">
      <div class="d-flex w-100 justify-content-center mt-3">
        <img :src="photoUrl" alt="" />
      </div>
      <p class="mt-3 excerpt">{{ excerpt }}</p>
    </div>
  </div>
</template>

<script>
  import {actionTypes as mediaActionTypes} from '../../store/modules/getMedia'

  export default {
    name: 'AboutCenter',
    props: {
      description: {
        type: String,
        required: true
      },
      excerpt: {
        type: String,
        required: true
      },
      photoId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        photoUrl: ''
      }
    },
    created() {
      this.$store
        .dispatch(mediaActionTypes.getMedia, {
          mediaId: this.photoId
        })
        .then((response) => (this.photoUrl = response.source_url))
    }
  }
</script>

<style scoped lang="scss">
  img {
    width: 350px;
    text-align: center;
  }
  p.excerpt {
    font-size: 13px;
    font-weight: 600;
    font-style: italic;
    font-family: 'Raleway', 'sans-serif';
    text-align: center;
    padding: 0 3rem;
  }
</style>
