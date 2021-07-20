<template>
  <div>
    <VideoBackground
      :videoId="videoId"
      :contentIsCollapse="contentIsCollapse"
      :expandContent="expandContent"
      :collapseContent="collapseContent"
    />
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
            <div role="button" @click="expandContent">
              <Icon
                class="icon-expand"
                v-if="contentIsCollapse"
                :src="expand"
              />
            </div>
            <div role="button" @click="collapseContent">
              <Icon
                class="icon-collapse"
                v-if="!contentIsCollapse"
                :src="collapse"
              />
            </div>
            <div role="button" @click="closeContent">
              <Icon :src="close" />
            </div>
          </div>
          <div v-if="!contentIsCollapse">
            <div v-if="title">
              <div v-html="title" class="mb-lg-5 mb-3"></div>
            </div>

            <div v-if="subtitle">
              <div v-html="subtitle" class="lead mb-lg-5 mb-3"></div>
            </div>
            <div v-if="isShowButton">
              <router-link :to="{name: 'Contact'}" class="btn btn-outline">
                НАПИСАТЬ
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoBackground from './VideoBackground'
  import Icon from './Icon'
  export default {
    name: 'Slide',
    components: {VideoBackground, Icon},
    props: {
      videoId: String,
      title: String,
      subtitle: String,
      isShowButton: Boolean
    },
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
      collapseContent() {
        this.contentIsCollapse = true
      },
      expandContent() {
        this.contentIsCollapse = false
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
    bottom: 4rem;
    left: 0;
  }
  .lead {
    color: #fff;
    font-weight: 400;
    font-size: 18px !important;
    line-height: 27px !important;
  }
  @media screen and (max-width: 1200px) {
    .lead {
      font-size: 16px !important;
    }
    .owl-carousel .owl-item img {
      width: 25px;
      height: 25px;
    }
    .owl-carousel .owl-item .icon-collapse,
    .owl-carousel .owl-item .icon-expand {
      width: 18px;
    }
  }
  @media screen and (max-width: 850px) {
    .lead {
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }
  @media screen and (max-width: 740px) {
    .lead {
      font-size: 13px !important;
      line-height: 18px !important;
    }
  }
  @media screen and (max-width: 670px) {
    .lead {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    .collapse {
      bottom: 2.3rem;
    }
    .owl-carousel .owl-item img {
      width: 18px;
      height: 18px;
    }
    .owl-theme .owl-dots .owl-dot span {
      width: 10px;
      height: 10px;
    }
    .lead {
      display: none;
    }
  }
</style>
