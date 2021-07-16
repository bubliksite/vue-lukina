import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Services from '../views/Services'
import Program from '../views/AllPrograms'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import AllPrograms from '../views/AllPrograms'
import PostBlog from '../views/PostBlog'
import Legal from '../views/Legal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/programs',
    name: 'AllPrograms',
    component: AllPrograms
  },
  {
    path: '/programs/:slug',
    name: 'Program',
    component: Program
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'PostBlog',
    component: PostBlog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
