<template>
  <nav class="nav">
    <router-link
      :to="{name: item.name}"
      class="nav-link"
      active-class="active"
      v-for="item in menu"
      :key="item.name"
    >
      {{ item.title }}
      <div><div class="underline"></div></div>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        menu: [
          {
            title: 'О центре',
            name: 'About'
          },
          {
            title: 'Программы',
            name: 'Programs'
          },
          {
            title: 'Услуги',
            name: 'Services'
          },
          {
            title: 'Блог',
            name: 'Blog'
          },
          {
            title: 'Записаться',
            name: 'Contact'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    margin-right: 3rem;
    font-size: 16px;
  }
</style>
