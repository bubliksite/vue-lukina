<template>
  <div
    id="slide-content"
    v-if="contentIsShow"
    :class="
      [!contentIsCollapse ? 'expand w-100' : 'collapse'] +
      ' d-flex justify-content-center'
    "
  >
    <div class="container">
      <div class="d-flex justify-content-end align-bottom">
        <div role="button" @click="toggleCollapse">
          <Icon v-if="contentIsCollapse" :src="expand" />
        </div>
        <div role="button" @click="toggleCollapse">
          <Icon v-if="!contentIsCollapse" :src="collapse" />
        </div>
        <div role="button" @click="closeContent">
          <Icon :src="close" />
        </div>
      </div>
      <div v-if="!contentIsCollapse">
        <div v-html="page.homeTitle" class="mb-5"></div>
        <div v-html="page.homeSubtitle" class="lead mb-5"></div>
        <router-link :to="{name: 'Contact'}" class="btn btn-outline">
          НАПИСАТЬ
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'SlideContent',
    props: {
      page: {
        type: Object,
        required: false
      }
    },
    components: {Icon},
    data() {
      return {
        contentIsCollapse: false,
        contentIsShow: true,
        collapse: require('../assets/images/icons/icon-collapse.svg'),
        expand: require('../assets/images/icons/icon-expand.svg'),
        close: require('../assets/images/icons/icon-close-yellow.svg')
      }
    },
    methods: {
      closeContent() {
        this.contentIsShow = false
      },
      toggleCollapse() {
        this.contentIsCollapse = !this.contentIsCollapse
      }
    }
  }
</script>

<style scoped lang="scss">
  #slide-content {
    z-index: 5;
  }
  .collapse {
    width: auto;
    position: absolute;
    overflow: hidden;
    bottom: 1.5rem;
    left: 0;
  }
  .lead {
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
</style>
