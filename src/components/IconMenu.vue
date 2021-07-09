<template>
  <nav class="nav">
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
  import Icon from './Icon'
  export default {
    name: 'IconMenu',
    components: {Icon},
    data() {
      return {
        phone: require('../assets/images/icons/icon-phone.svg'),
        instagram: require('../assets/images/icons/icon-instagram.svg'),
        person: require('../assets/images/icons/icon-person.svg')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-link {
    padding: 0.5rem;
  }
</style>
