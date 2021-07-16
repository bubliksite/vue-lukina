<template>
  <div class="social_icons d-flex" :class="`justify-content-${align}`">
    <a href="#">
      <Icon :src="icons.instagram" />
    </a>
    <a href="#">
      <Icon :src="icons.facebook" />
    </a>
    <a href="#">
      <Icon :src="icons.youtube" />
    </a>
    <a href="#">
      <Icon :src="icons.telegram" />
    </a>
  </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'SmallSocialLinks',
    components: {
      Icon
    },
    props: {
      align: String
    },
    data() {
      return {
        icons: {
          instagram: require('../assets/images/icons/icon-instagram-small.svg'),
          facebook: require('../assets/images/icons/icon-facebook-small.svg'),
          youtube: require('../assets/images/icons/icon-youtube-small.svg'),
          telegram: require('../assets/images/icons/icon-telegram-small.svg')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    margin: 1rem;
    &:first-child {
      margin-left: 0;
    }
  }
</style>
