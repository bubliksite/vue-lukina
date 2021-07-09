import axios from './axios'

const getHomePage = () => {
  return axios.get('/pages/8')
}

export default getHomePage
