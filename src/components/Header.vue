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
  @import 'src/assets/styles/variables';
  header {
    z-index: 1;
    top: 0;
    a.nav-link {
      font-weight: 400;
      color: #fff;
      &.active {
        div {
          display: flex;
          justify-content: center;
          margin-top: 0.35rem;
          .underline {
            width: 40px;
            height: 1px;
            border-bottom: 1px solid $text-yellow;
          }
        }
      }
      &:hover {
        @extend a;
      }
    }
  }
</style>
