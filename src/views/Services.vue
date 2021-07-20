<template>
  <div>
    <Header />
    <div v-if="page">
      <carousel :items="1">
        <div
          class="slide position-relative"
          v-for="(videoId, index) in page.CFS.video"
          :key="index"
        >
          <Slide
            :videoId="videoId"
            :title="page.CFS.title[index]"
            :subtitle="page.CFS.subtitle[index]"
            :isShowButton="page.CFS.isShowButton[index] === '1'"
          />
        </div>
      </carousel>
    </div>
    <section class="bg-white" v-if="page">
      <div class="container py-5">
        <SectionHeader title="Направления" />
        <p class="py-5 m-0">
          В центре проводится психологическое консультирование в соответствии со
          стандартами и требованиями ЕАС (Европейской Ассоциации
          Психологического Консультирования) по всем основным направлениям:
        </p>
        <ul class="pb-3 list-unstyled">
          <li
            class="py-1"
            v-for="(item, index) in page.CFS.direction"
            :key="index"
          >
            <img :src="bullet" alt="" />
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
    <section class="bg-primary" v-if="page">
      <div class="container py-5">
        <SectionHeader title="Стоимость консультаций" />
      </div>
    </section>
  </div>
</template>

<script>
  import axios from '../api/axios'
  import carousel from 'vue-owl-carousel2'

  import Header from '../components/Header/Header'
  import SectionHeader from '../components/SectionHeader'
  import Slide from '../components/Slide'

  export default {
    name: 'Services',
    components: {Header, SectionHeader, Slide, carousel},
    data() {
      return {
        bullet: require('../assets/images/icons/icon-bullet.svg'),
        homePage: '',
        loader: true,
        page: null
      }
    },
    mounted() {
      this.getPage()
    },
    methods: {
      getPage() {
        axios.get('/pages/52').then((response) => (this.page = response.data))
      }
    }
  }
</script>

<style lang="scss"></style>
