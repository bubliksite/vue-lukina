import getPage from '../../api/getPage'

export const mutationTypes = {
  getPageStart: '[getPage] Start Get Page',
  getPageSuccess: '[getPage] Success Get Page',
  getPageFailure: '[getPage] Failure Get Page'
}

export const actionTypes = {
  getPage: '[getPage] Get Page'
}

export default {
  state: {
    page: null,
    isLoading: false,
    errors: null
  },
  mutations: {
    [mutationTypes.getPageStart](state) {
      state.isLoading = true
      state.page = null
      state.errors = null
    },
    [mutationTypes.getPageSuccess](state, payload) {
      state.isLoading = false
      state.page = payload
    },
    [mutationTypes.getPageFailure](state, payload) {
      state.isLoading = false
      state.errors = payload
    }
  },
  actions: {
    [actionTypes.getPage](context, {pageId}) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getPageStart)
        getPage(pageId)
          .then((response) => {
            context.commit(mutationTypes.getPageSuccess, response.data)
            resolve(response.data)
          })
          .catch((result) => {
            context.commit(mutationTypes.getPageFailure, result.response)
          })
      })
    }
  }
}
