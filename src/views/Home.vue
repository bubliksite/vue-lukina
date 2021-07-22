<template>
  <div>
    <div>
      <div v-if="page">
        <carousel :items="1">
          <div
            class="slide position-relative"
            v-for="(videoId, index) in page.CFS.video"
            :key="index"
          >
            <Slide
              :videoId="page.CFS.video[index]"
              :title="page.CFS.title[index]"
              :subtitle="page.CFS.subtitle[index]"
              :isShowButton="page.CFS.isShowButton[index] === '1'"
            />
          </div>
        </carousel>
      </div>
      <section class="excerpt bg-primary" v-if="page">
        <div class="container py-5">
          <hr />
          <h3 class="text-center py-lg-5 py-md-3 py-2">
            <em v-html="page.CFS.excerpt[0]"></em>
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
            :description="page.CFS.aboutDescription[0]"
            :excerpt="page.CFS.apoutExcerpt[0]"
            :photoId="page.CFS.aboutPhoto[0]"
          />
        </div>
      </section>
      <section class="bg-white" v-if="page">
        <div class="container py-5">
          <SectionHeader title="Философия" />
          <Philosophy
            :partText="page.CFS.partText[0]"
            :cardText="page.CFS.cardText[0]"
            :desktopImageId="page.CFS.imageDesktop[0]"
            :mobileImageId="page.CFS.imageMobile[0]"
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
              v-for="(partner, index) in page.CFS.partnerName"
              :key="index"
            >
              <PartnerExcerpt
                :partner="{
                  image: page.CFS.partnerImage[index],
                  name: page.CFS.partnerName[index]
                }"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from '../api/axios'

  import carousel from 'vue-owl-carousel2'

  import ProgramExcerpt from '../components/Home/ProgramExcerpt'
  import SectionHeader from '../components/SectionHeader'
  import AboutCenter from '../components/Home/AboutCenter'
  import Philosophy from '../components/Home/Philosophy'
  import BlogExcerpt from '../components/Home/BlogExcerpt'
  import PartnerExcerpt from '../components/Home/PartnerExcerpt'
  import Slide from '../components/Slide'

  export default {
    name: 'Home',
    components: {
      Slide,
      PartnerExcerpt,
      BlogExcerpt,
      Philosophy,
      AboutCenter,
      SectionHeader,
      ProgramExcerpt,
      carousel
    },
    data() {
      return {
        loader: true,
        page: null,
        programs: [],
        blogs: []
      }
    },
    mounted() {
      this.getHomePage()
      this.getPrograms()
      this.getBlogPost()
    },
    methods: {
      getHomePage() {
        axios.get('/pages/8').then((response) => (this.page = response.data))
      },
      getPrograms() {
        axios
          .get('/pages/20')
          .then((response) => this.programs.unshift(response.data))
        axios
          .get('/pages/22')
          .then((response) => this.programs.push(response.data))
      },
      getBlogPost() {
        axios
          .get('/posts?per_page=4')
          .then((response) => (this.blogs = response.data))
          .then(() => (this.loader = false))
      }
    }
  }
</script>

<style lang="scss">
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
