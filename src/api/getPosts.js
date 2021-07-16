import axios from './axios'

export const getAllPostsPerPage = (perPage) => {
  return axios.get(`/posts?per_page=${perPage}`)
}
