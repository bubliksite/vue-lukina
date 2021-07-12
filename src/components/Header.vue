<template>
  <header class="position-absolute w-100 py-3">
    <div class="container">
      <div class="d-flex justify-content-between">
        <Logo />
        <div class="d-flex justify-content-center align-items-center">
          <NavMenu />
          <IconMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from './Logo'
  import NavMenu from './NavMenu'
  import IconMenu from './IconMenu'
  export default {
    name: 'Header',
    components: {IconMenu, NavMenu, Logo}
  }
</script>

<style lang="scss">
  header {
    z-index: 1;
    top: 0;
  }
</style>
