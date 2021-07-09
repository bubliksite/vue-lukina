<template>
  <header class="position-absolute w-100 py-3">
    <div class="container">
      <div class="d-flex justify-content-between">
        <Logo />
        <nav class="nav">
          <router-link
            :to="{name: 'About'}"
            class="nav-link"
            active-class="active"
          >
            О центре
            <div><div class="underline"></div></div>
          </router-link>
          <router-link
            :to="{name: 'Programs'}"
            class="nav-link"
            active-class="active"
          >
            О центре
            <div><div class="underline"></div></div>
          </router-link>
          <div class="nav-icons"></div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from './Logo'
  export default {
    name: 'Header',
    components: {Logo}
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
