<template>
  <header class="position-absolute w-100 py-lg-3 py-1">
    <div class="container">
      <div class="d-flex justify-content-between">
        <Logo color="white" />
        <div class="menu">
          <div class="d-flex justify-content-center align-items-center">
            <NavMenu />
            <IconMenu />
          </div>
        </div>
        <div class="mobile-menu">
          <div class="mobile-menu-icons d-flex align-items-center">
            <div @click="openMenu" role="button">
              <Icon :src="burger" />
            </div>
            <a href="lk.domain.name">
              <Icon :src="person" />
            </a>
          </div>
          <div
            ref="mobileMenu"
            class="menu-mobile position-absolute"
            :class="{close: !isOpenMobileMenu, open: isOpenMobileMenu}"
          >
            <div class="container position-relative py-3">
              <div @click="closeMenu" class="close-mobile-menu">
                <Icon :src="close" />
              </div>
              <NavMenu :isMobile="true" />
              <IconMenu :isMobile="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '../Logo'
  import NavMenu from './NavMenu'
  import IconMenu from './IconMenu'
  import Icon from '../Icon'
  export default {
    name: 'Header',
    components: {Icon, IconMenu, NavMenu, Logo},
    data() {
      return {
        burger: require('../../assets/images/icons/icon-burger.svg'),
        person: require('../../assets/images/icons/icon-person.svg'),
        close: require('../../assets/images/icons/icon-close-white.svg'),
        isOpenMobileMenu: false
      }
    },
    methods: {
      openMenu() {
        this.$refs.mobileMenu.classList.remove('close')
        this.$refs.mobileMenu.classList.add('open')
      },
      closeMenu() {
        this.$refs.mobileMenu.classList.remove('open')
        this.$refs.mobileMenu.classList.add('close')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/variables';

  header {
    z-index: 3;
    top: 0;
    a {
      color: #fff !important;
      :hover {
        @extend a;
      }
    }
    .mobile-menu {
      display: none;
    }
  }
  @media screen and (max-width: 740px) {
    header {
      background-color: $dark-red;
      .menu {
        display: none;
      }
      .mobile-menu {
        display: block;
      }
      .menu-mobile {
        background-color: $dark-red;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transition: transform 1s ease-in-out;
        &.close {
          transform: translateY(-100vh);
        }
        &.open {
          transform: translateY(0);
        }
        .close-mobile-menu {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
</style>
