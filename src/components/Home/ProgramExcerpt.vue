<template>
  <div>
    <h4 class="text-uppercase py-5">{{ program.title.rendered }}</h4>
    <p
      class="pe-md-5 pe-0 pb-lg-5 pb-md-3 pb-2"
      v-html="program.CFS.about[0]"
    ></p>
    <router-link
      class="text-uppercase"
      :to="{name: 'Program', params: {slug: program.slug}}"
    >
      {{ program.CFS.link[0] }} →
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ProgramExcerpt',
    props: {
      program: Object
    }
  }
</script>

<style scoped lang="scss">
  @import 'src/assets/styles/variables.scss';
  a {
    color: #ac5f68;
    &:hover {
      @extend a;
    }
  }
</style>
