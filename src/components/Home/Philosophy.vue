<template>
  <div class="py-5">
    <p v-html="texts.partText"></p>
  </div>
</template>

<script>
  export default {
    name: 'Philosophy',
    props: {
      texts: {
        type: Object,
        required: true
      },
      images: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped></style>
