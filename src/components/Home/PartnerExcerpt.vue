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
  import {actionTypes} from '../../store/modules/getMedia'

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
    created() {
      this.$store
        .dispatch(actionTypes.getMedia, {mediaId: this.partner.image})
        .then((response) => (this.partnerImageUrl = response.source_url))
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
