import getHomePage from '../../api/homePage'

export const mutationTypes = {
  getHomePageStart: '[homePage] Start Get Full Page',
  getHomePageSuccess: '[homePage] Success Get Full Page',
  getHomePageFailure: '[homePage] Failure Get Full Page'
}

export const actionTypes = {
  getHomePage: '[homePage] Get Full Page'
}

export default {
  state: {
    page: null,
    isLoading: false,
    errors: null
  },
  mutations: {
    [mutationTypes.getHomePageStart](state) {
      state.isLoading = true
      state.page = null
      state.errors = null
    },
    [mutationTypes.getHomePageSuccess](state, payload) {
      state.isLoading = false
      state.page = payload
    },
    [mutationTypes.getHomePageFailure](state, payload) {
      state.isLoading = false
      state.errors = payload
    }
  },
  actions: {
    [actionTypes.getHomePage](context) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getHomePageStart)
        getHomePage()
          .then((response) => {
            context.commit(mutationTypes.getHomePageSuccess, response.data)
            resolve(response.data)
          })
          .catch((result) => {
            context.commit(mutationTypes.getHomePageFailure, result.response)
          })
      })
    }
  }
}
