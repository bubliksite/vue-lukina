<template>
  <div class="py-5">
    <p v-html="partText"></p>
    <div class="py-3">
      <img class="desktop mx-auto" :src="desktopImageUrl" alt="" />
      <img class="mobile mx-auto" :src="mobileImageUrl" alt="" />
    </div>
    <p class="p-3 mt-3 bg-gray" v-html="cardText"></p>
    <div class="d-flex justify-content-end mt-4">
      <em>
        Подробнее о направлениях работы, услугах и специалистах центра смотрите
        в раздел Услуги.
      </em>
    </div>
  </div>
</template>

<script>
  import axios from '../../api/axios'

  export default {
    name: 'Philosophy',
    props: {
      partText: String,
      cardText: String,
      desktopImageId: String,
      mobileImageId: String
    },
    data() {
      return {
        desktopImageUrl: '',
        mobileImageUrl: ''
      }
    },
    mounted() {
      this.getDesktopImage(this.desktopImageId)
      this.getMobileImage(this.mobileImageId)
    },
    methods: {
      getDesktopImage(mediaId) {
        axios
          .get(`/media/${mediaId}`)
          .then((response) => (this.desktopImageUrl = response.data.source_url))
      },
      getMobileImage(mediaId) {
        axios
          .get(`/media/${mediaId}`)
          .then((response) => (this.mobileImageUrl = response.data.source_url))
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/variables';
  .bg-gray {
    background-color: $bg-card;
  }
  .mobile {
    display: none;
    max-width: 90%;
  }
  .desktop {
    display: block;
    max-width: 90%;
  }
  em {
    text-align: end;
    width: 480px;
    max-width: 90%;
  }

  @media screen and (max-width: 420px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
</style>
