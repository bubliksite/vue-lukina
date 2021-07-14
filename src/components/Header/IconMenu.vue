<template>
  <nav
    class="nav"
    :class="{'mx-auto w-100 justify-content-center mt-3': isMobile}"
  >
    <a href="tel: +7 (999) 000-00-00" class="nav-link">
      <Icon :src="phone" />
    </a>
    <a href="https://instagram.com" class="nav-link">
      <Icon :src="instagram" />
    </a>
    <a href="https://lk.domain.name" class="nav-link">
      <Icon :src="person" />
    </a>
  </nav>
</template>

<script>
  import Icon from '../Icon'
  export default {
    name: 'IconMenu',
    props: {
      isMobile: {
        required: false,
        type: Boolean
      }
    },
    components: {Icon},
    data() {
      return {
        phone: require('../../assets/images/icons/icon-phone.svg'),
        instagram: require('../../assets/images/icons/icon-instagram.svg'),
        person: require('../../assets/images/icons/icon-person.svg')
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    img {
      margin: 0.3rem;
    }
    .nav-link {
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 1200px) {
    nav {
      img {
        margin: 0.3rem;
        width: 20px;
      }
      .nav-link {
        padding: 0.3rem;
      }
    }
  }
  @media screen and (max-width: 850px) {
    nav {
      img {
        margin: 0.3rem;
        width: 18px;
      }

      .nav-link {
        padding: 0.1rem;
      }
    }
  }
</style>
