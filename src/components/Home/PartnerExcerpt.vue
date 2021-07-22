<template>
  <div class="py-sm-5 py-2">
    <div class="d-flex align-items-start">
      <img v-if="partnerImageUrl" class="w-100" :src="partnerImageUrl" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <p class="my-md-4 my-2">
        {{ partner.name }}
      </p>
    </div>
  </div>
</template>

<script>
  import axios from '../../api/axios'

  export default {
    name: 'PartnerExcerpt',
    props: {
      partner: Object
    },
    data() {
      return {
        partnerImageUrl: ''
      }
    },
    mounted() {
      this.getImage(this.partner.image)
    },
    methods: {
      getImage(mediaId) {
        axios
          .get(`/media/${mediaId}`)
          .then((response) => (this.partnerImageUrl = response.data.source_url))
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    height: 100px;
    width: 100%;
    object-fit: contain;
    margin: 0;
  }
  p {
    width: 80%;
  }
  @media screen and (max-width: 740px) {
    p {
      font-size: 12px;
      width: 100%;
    }
  }
</style>
