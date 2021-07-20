<template>
  <div>
    <Loader v-if="loader" />
    <div v-else>
      <Header />
      <div v-if="page && slider">
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
      </div>
      <section class="excerpt bg-primary" v-if="excerpt">
        <div class="container py-5">
          <hr />
          <h3 class="text-center py-lg-5 py-md-3 py-2">
            <em v-html="excerpt"></em>
          </h3>
          <hr />
        </div>
      </section>
      <section class="programs py-5 bg-white" v-if="programs">
        <div class="container">
          <SectionHeader title="Программы" />
          <div class="row">
            <div v-for="program in programs" :key="program.id" class="col-md-6">
              <ProgramExcerpt :program="program" />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-primary" v-if="page">
        <div class="container py-5">
          <SectionHeader title="О центре" />
          <AboutCenter
            v-if="about"
            :description="about.description"
            :excerpt="about.excerpt"
            :photoId="about.photoId"
          />
        </div>
      </section>
      <section class="bg-white" v-if="page">
        <div class="container py-5">
          <SectionHeader title="Философия" />
          <Philosophy
            v-if="philosophy"
            :partText="philosophy.partText"
            :cardText="philosophy.cardText"
            :desktopImageId="philosophy.desktopImageId"
            :mobileImageId="philosophy.mobileImageId"
          />
        </div>
      </section>
      <section class="bg-primary">
        <div class="container py-5">
          <SectionHeader title="Блог" />
          <div class="row" v-if="blogs">
            <div v-for="blog in blogs" :key="blog.id" class="col-6">
              <BlogExcerpt :post="blog" />
            </div>
            <router-link
              style="color: #ac5f68; width: fit-content"
              :to="{name: 'Blog'}"
            >
              Больше публикаций →
            </router-link>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="container py-5">
          <SectionHeader title="Партнеры" />
          <div class="row" v-if="page">
            <div
              class="col-lg-3 col-6"
              v-for="(partner, index) in partners.name"
              :key="index"
            >
              <PartnerExcerpt
                :partner="{
                  image: partner.image[index],
                  name: partner.name[index]
                }"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import carousel from 'vue-owl-carousel2'
  import Header from '../components/Header/Header'
  import Loader from '../components/Loader'
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import {actionTypes as postActionTypes} from '../store/modules/getPosts'
  import ProgramExcerpt from '../components/Home/ProgramExcerpt'
  import SectionHeader from '../components/SectionHeader'
  import AboutCenter from '../components/Home/AboutCenter'
  import Philosophy from '../components/Home/Philosophy'
  import BlogExcerpt from '../components/Home/BlogExcerpt'
  import PartnerExcerpt from '../components/Home/PartnerExcerpt'
  import Footer from '../components/Footer'
  import Slide from '../components/Slide'

  export default {
    name: 'Home',
    components: {
      Slide,
      carousel,
      Footer,
      PartnerExcerpt,
      BlogExcerpt,
      Philosophy,
      AboutCenter,
      SectionHeader,
      ProgramExcerpt,
      Loader,
      Header
    },
    data() {
      return {
        loader: false,
        page: {},
        programs: [],
        blogs: []
      }
    },
    methods: {
      getThePage() {
        axios
          .get('https://admin.lukina.bblk.ga/wp-json/wp/v2/pages/8')
          .then((response) => (this.page = response.data))
      }
    },
    computed: {
      slider() {
        return {
          videoId: this.page.CFS.video,
          title: this.page.CFS.title,
          subtitle: this.page.CFS.subtitle,
          isShowButton: this.page.CFS.isShowButton
        }
      },
      excerpt() {
        return this.page.CFS.excerpt[0]
      },
      about() {
        return {
          description: this.page.CFS.aboutDescription[0],
          excerpt: this.page.CFS.apoutExcerpt[0],
          photoId: this.page.CFS.aboutPhoto[0]
        }
      },
      philosophy() {
        return {
          partText: this.page.CFS.partText[0],
          cardText: this.page.CFS.cardText[0],
          desktopImageId: this.page.CFS.imageDesktop[0],
          mobileImageId: this.page.CFS.imageMobile[0]
        }
      },
      partners() {
        return {
          name: this.page.CFS.partnerName,
          image: this.page.CFS.partnerImage
        }
      }
    },
    mounted() {
      this.getThePage()
      this.$store
        .dispatch(pageActionTypes.getPage, {
          pageId: 20
        })
        .then((response) => this.programs.unshift(response))
      this.$store
        .dispatch(pageActionTypes.getPage, {
          pageId: 22
        })
        .then((response) => this.programs.push(response))
      this.$store
        .dispatch(postActionTypes.getAllPostsPerPage, {
          perPage: 4
        })
        .then((response) => (this.blogs = response))
    }
    // mounted() {
    //   this.loader = false
    // }
  }
</script>

<style scoped lang="scss">
  @import 'src/assets/styles/variables';
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
  .excerpt {
    hr {
      border: 1px solid $text-yellow;
      color: $text-yellow;
      opacity: 1;
      width: 400px;
      max-width: 80%;
      margin: 0 auto;
    }
  }
  a {
    color: $dark-red !important;
    :hover {
      @extend a;
    }
  }
</style>
