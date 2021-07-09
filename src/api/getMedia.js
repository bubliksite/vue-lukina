import axios from './axios'

const getMedia = (mediaId) => {
  return axios.get(`/media/${mediaId}`)
}

export default getMedia
