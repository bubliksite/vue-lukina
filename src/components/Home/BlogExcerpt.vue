<template>
  <div class="row mt-4 mb-5">
    <div class="col-md-4 text-center">
      <img class="w-100 mb-3" :src="imageUrl" alt="" />
    </div>
    <div class="col-md-8">
      <div class="d-flex align-items-center w-100 h-100">
        <div>
          <h6>{{ post.title.rendered }}</h6>
          <p class="small text-muted py-2 my-1">{{ post.CFS.short[0] }}</p>
          <p v-html="post.excerpt.rendered" class="pb-2"></p>
          <router-link :to="{name: 'PostBlog', params: {slug: post.slug}}"
            >Читать далее >>></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {actionTypes} from '../../store/modules/getMedia'

  export default {
    name: 'BlogExcerpt',
    props: {
      post: Object
    },
    data() {
      return {
        imageUrl: ''
      }
    },
    created() {
      this.$store
        .dispatch(actionTypes.getMedia, {
          mediaId: this.post.CFS._thumbnail_id
        })
        .then((response) => (this.imageUrl = response.source_url))
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/variables';

  a {
    color: $dark-red !important;
    :hover {
      @extend a;
    }
  }
  h6 {
    font-weight: normal;
    padding: 0.5rem;
    background-color: $bg-card;
  }
  .small {
    font-size: 12px;
    line-height: 130%;
  }
  .text-muted {
    color: $text-ghost !important;
  }
  img {
    margin: 0;
  }
  p {
    font-size: 14px;
  }
  .row a {
    font-size: 12px;
  }
  @media screen and (max-width: 740px) {
    img {
      max-width: 70%;
      object-fit: contain;
    }
    h6 {
      font-size: 14px;
    }
    p.small {
      font-size: 10px;
    }
    p {
      font-size: 12px;
    }
  }
</style>
