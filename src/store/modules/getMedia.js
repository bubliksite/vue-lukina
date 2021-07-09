import getMedia from '../../api/getMedia'

export const mutationTypes = {
  getMediaStart: '[media] Start Get Media',
  getMediaSuccess: '[media] Success Get Media',
  getMediaFailure: '[media] Failure Get Media'
}

export const actionTypes = {
  getMedia: '[media] Get Media'
}

export default {
  state: {
    media: null,
    errors: null
  },
  mutations: {
    [mutationTypes.getMediaStart](state) {
      state.media = null
      state.errors = null
    },
    [mutationTypes.getMediaSuccess](state, payload) {
      state.media = payload
    },
    [mutationTypes.getMediaFailure](state, payload) {
      state.errors = payload
    }
  },
  actions: {
    [actionTypes.getMedia](context, {mediaId}) {
      return new Promise((resolve) => {
        context.commit(mutationTypes.getMediaStart)
        getMedia(mediaId)
          .then((response) => {
            context.commit(mutationTypes.getMediaSuccess, response.data)
            resolve(response.data)
          })
          .catch((result) => {
            context.commit(mutationTypes.getMediaFailure, result.response)
          })
      })
    }
  }
}
