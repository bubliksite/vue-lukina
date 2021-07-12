<template>
  <nav class="nav">
    <router-link
      :to="{name: item.name}"
      :exact="item.exact"
      class="nav-link"
      active-class="active"
      v-for="item in menu"
      :key="item.name"
    >
      {{ item.title }}
      <div class="active-element">
        <div class="underline"></div>
      </div>
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
            title: 'Главная',
            name: 'Home',
            exact: true
          },
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
  @import 'src/assets/styles/variables';
  nav {
    margin-right: 3rem;
    font-size: 16px;
    a.nav-link {
      font-weight: 400;
      color: #fff;
      &:hover {
        @extend a;
      }
      &.active {
        .active-element {
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
    }

  }
</style>
