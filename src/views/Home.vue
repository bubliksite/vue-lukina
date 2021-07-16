<template>
  <div>
    <Loader v-if="loader" />
    <div v-else>
      <Header />
      <Slider v-if="homePage" :homePage="homePage" />
      <section class="excerpt bg-primary">
        <div class="container py-5">
          <hr />
          <h3 class="text-center py-lg-5 py-md-3 py-2">
            <em v-if="homePage" v-html="homePage.customFields.excerpt[0]"></em>
          </h3>
          <hr />
        </div>
      </section>
      <section class="programs py-5 bg-white">
        <div class="container">
          <SectionHeader title="Программы" />
          <div class="row">
            <div v-for="program in programs" :key="program.id" class="col-md-6">
              <ProgramExcerpt :program="program" />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-primary">
        <div class="container py-5">
          <SectionHeader title="О центре" />
          <AboutCenter
            v-if="homePage"
            :description="homePage.customFields.aboutDescription[0]"
            :excerpt="homePage.customFields.apoutExcerpt[0]"
            :photoId="homePage.customFields.aboutPhoto[0]"
          />
        </div>
      </section>
      <section class="bg-white">
        <div class="container py-5">
          <SectionHeader title="Философия" />
          <Philosophy
            v-if="homePage"
            :texts="{
              partText: homePage.customFields.partText[0],
              cardText: homePage.customFields.cardText[0]
            }"
            :images="{
              desktopImageId: homePage.customFields.imageDesktop[0],
              mobileImageId: homePage.customFields.imageMobile[0]
            }"
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
          <div class="row" v-if="homePage">
            <div
              class="col-lg-3 col-6"
              v-for="(partner, index) in homePage.customFields.partnerName"
              :key="partner"
            >
              <PartnerExcerpt
                :partner="{
                  image: homePage.customFields.partnerImage[index],
                  name: homePage.customFields.partnerName[index]
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
  import Header from '../components/Header/Header'
  import Loader from '../components/Loader'
  import {mapState} from 'vuex'
  import {actionTypes as pageActionTypes} from '../store/modules/getPage'
  import {actionTypes as postActionTypes} from '../store/modules/getPosts'
  import Slider from '../components/Home/Slider'
  import ProgramExcerpt from '../components/Home/ProgramExcerpt'
  import SectionHeader from '../components/SectionHeader'
  import AboutCenter from '../components/Home/AboutCenter'
  import Philosophy from '../components/Home/Philosophy'
  import BlogExcerpt from '../components/Home/BlogExcerpt'
  import PartnerExcerpt from '../components/Home/PartnerExcerpt'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',
    components: {
      Footer,
      PartnerExcerpt,
      BlogExcerpt,
      Philosophy,
      AboutCenter,
      SectionHeader,
      ProgramExcerpt,
      Slider,
      Loader,
      Header
    },
    data() {
      return {
        homePage: '',
        programs: [],
        blogs: []
      }
    },
    computed: {
      ...mapState({
        loader: (state) => state.homePage.isLoading
      })
    },
    created() {
      this.$store
        .dispatch(pageActionTypes.getPage, {
          pageId: 8
        })
        .then((response) => (this.homePage = response))
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
  }
</script>

<style scoped lang="scss">
  @import 'src/assets/styles/variables';
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
