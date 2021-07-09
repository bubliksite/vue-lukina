<template>
  <div class="loader">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style lang="scss">
  @import 'src/assets/styles/variables';
  .loader {
    z-index: 100;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-primary;
    .spinner-border {
      $size: 150;
      width: $size + px;
      height: $size + px;
      border-width: 1rem;
      border-color: $color-accent;
      border-right-color: transparent;
    }
  }
</style>
