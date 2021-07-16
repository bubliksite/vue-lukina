import {getAllPostsPerPage} from '../../api/getPosts'

export const actionTypes = {
  getAllPostsPerPage: '[media] Get All Posts Per Page'
}

export default {
  actions: {
    [actionTypes.getAllPostsPerPage](context, {perPage}) {
      return new Promise((resolve) => {
        getAllPostsPerPage(perPage).then((response) => {
          resolve(response.data)
        })
      })
    }
  }
}
