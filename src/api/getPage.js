import axios from './axios'

const getPage = (pageId) => {
  return axios.get(`/pages/${pageId}`)
}

export default getPage
