import Vue from 'vue'
import Vuex from 'vuex'

import homePage from './modules/getPage'
import getMedia from './modules/getMedia'
import getPosts from './modules/getPosts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homePage,
    getMedia,
    getPosts
  }
})
