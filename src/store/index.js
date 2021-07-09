import Vue from 'vue'
import Vuex from 'vuex'

import homePage from './modules/homePage'
import getMedia from './modules/getMedia'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homePage,
    getMedia
  }
})
