<template>
  <footer class="bg-primary py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-2 my-3">
          <h6>Меню</h6>
          <nav class="nav flex-column mt-3">
            <router-link class="nav-link" :to="{name: 'About'}"
              >О центре</router-link
            >
            <router-link class="nav-link" :to="{name: 'AllPrograms'}"
              >Программы</router-link
            >
            <router-link class="nav-link" :to="{name: 'Services'}"
              >Услуги</router-link
            >
            <router-link class="nav-link" :to="{name: 'Blog'}"
              >Блог</router-link
            >
          </nav>
        </div>
        <div class="col-md-5 my-3">
          <h6>Направления</h6>
          <nav class="nav flex-column mt-3">
            <router-link
              class="nav-link"
              :to="{name: 'Program', params: {slug: 'companies'}}"
              >Работа с корпоративными клиентами</router-link
            >
            <router-link
              class="nav-link"
              :to="{name: 'Program', params: {slug: 'companies'}}"
              >Услуги для частных лиц</router-link
            >
            <router-link class="nav-link" :to="{name: 'Blog'}"
              >Книги и публикации</router-link
            >
          </nav>
        </div>
        <div class="col-md-5 my-3">
          <h6>Контакты</h6>
          <nav class="nav flex-column mt-3 text-lg-start text-center">
            <a class="nav-link fw-bold" href="tel: +7 925 391 84 33">
              +7 925 391 84 33
            </a>
            <a class="py-2" href="mailto: olga.aleksandrovna.lukina@yandex.ru">
              olga.aleksandrovna.lukina@yandex.ru
            </a>
            <p class="m-0 text-body">
              Москва, ул. Трубная д. 32, стр. 3, 1-й этаж, офис 12 <br />
              Психологический Центр. 10 минут пешком от станций метро Цветной
              Бульвар или Сухаревская
            </p>
            <SmallSocialLinks
              class="justify-content-lg-start justify-content-center"
            />
          </nav>
        </div>
      </div>
      <div
        class="
          d-lg-flex
          align-items-center
          d-lg-flex d-block
          footer-end
          text-lg-start text-center
        "
      >
        <div class="logo">
          <Logo />
        </div>
        <router-link class="mx-3" :to="{name: 'Legal'}"
          >Документы и юридическая информация</router-link
        >
        <span class="d-lg-block d-none">|</span>
        <p class="my-0 mx-3">© 2001 — {{ year }} Ольга Лукина</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import SmallSocialLinks from './SmallSocialLinks'
  import Logo from './Logo'
  export default {
    name: 'Footer',
    components: {Logo, SmallSocialLinks},
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/variables';

  .bg-primary {
    background-image: url('../assets/images/backgrounds/bg-footer.png');
    background-repeat: no-repeat;
    background-position: right 10% center;
    background-size: contain;
  }
  h6 {
    color: $dark-red;
  }
  a {
    color: $dark-red;
    &:hover {
      @extend a;
    }
  }
  nav.nav {
    a.nav-link {
      color: black;
      padding-left: 0;
      padding-bottom: 0;
      padding-top: 0.1rem;
      text-decoration: none;
      &:hover {
        @extend a;
      }
    }
  }
  p {
    color: $dark-red;
  }
  @media screen and (max-width: 420px) {
    .logo {
      display: none;
    }
    footer.bg-primary {
      background-image: none;
    }
    .footer-end {
      a,
      p {
        font-size: 12px;
      }
    }
  }
</style>
