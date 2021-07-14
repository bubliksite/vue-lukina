<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="red-underline"></div>
  </div>
</template>

<script>
  export default {
    name: 'SectionHeader',
    props: {
      title: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped></style>
