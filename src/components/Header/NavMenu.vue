<template>
  <nav :class="{'flex-column mt-3': isMobile || isFooter}" class="nav">
    <router-link
      :to="{name: item.name}"
      :exact="item.exact"
      :class="{'footer-nav': isFooter}"
      class="nav-link"
      active-class="active"
      v-for="item in menu"
      :key="item.name"
    >
      {{ item.title }}
      <div class="active-element" v-if="!(isMobile || isFooter)">
        <div class="underline"></div>
      </div>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: {
      isMobile: {
        required: false,
        type: Boolean
      },
      isFooter: Boolean
    },
    data() {
      return {
        menu: [
          {
            title: 'О центре',
            name: 'About'
          },
          {
            title: 'Программы',
            name: 'AllPrograms'
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
  @import '../../assets/styles/variables';
  nav {
    margin-right: 3rem;
    font-size: 16px;
    a.nav-link {
      font-weight: 400;
      color: #fff;
      &.footer-nav {
        color: black;
        padding-left: 0;
        padding-bottom: 0;
        padding-top: 0.1rem;
      }
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
  @media screen and (max-width: 1200px) {
    .nav-link {
      font-size: 14px;
      img {
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .nav-link {
      font-size: 13px;
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 740px) {
    nav {
      margin: 0 auto;
      max-width: 100%;
      width: fit-content;
      font-size: 18px;
    }
  }
</style>
