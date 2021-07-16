<template>
  <div class="py-5">
    <div class="row">
      <div class="col-md-6">
        <p v-html="description"></p>
      </div>
      <div class="col-md-6">
        <div class="d-flex w-100 justify-content-center mt-3">
          <img :src="photoUrl" alt="" />
        </div>
        <p class="mt-3 excerpt">{{ excerpt }}</p>
        <SmallSocialLinks align="center" />
      </div>
    </div>
  </div>
</template>

<script>
  import {actionTypes as mediaActionTypes} from '../../store/modules/getMedia'
  import SmallSocialLinks from '../SmallSocialLinks'

  export default {
    name: 'AboutCenter',
    components: {SmallSocialLinks},
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
        photoUrl: '',
        icons: {
          instagram: require('../../assets/images/icons/icon-instagram-small.svg'),
          facebook: require('../../assets/images/icons/icon-facebook-small.svg'),
          youtube: require('../../assets/images/icons/icon-youtube-small.svg'),
          telegram: require('../../assets/images/icons/icon-telegram-small.svg')
        }
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
    max-width: 100%;
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
  .social_icons {
    img {
      width: 20px;
    }
  }
</style>
