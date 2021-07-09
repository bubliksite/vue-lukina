<template>
  <img :src="src" alt="" />
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      src: {
        required: true,
        type: String
      }
    }
  }
</script>

<style lang="scss">
  img {
    margin: 0.5rem;
  }
</style>
