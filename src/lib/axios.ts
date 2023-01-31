import axios from 'axios'

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users/arthur-rosch',
})
export const apiRepository = axios.create({
  baseURL: 'https://api.github.com/users/arthur-rosch/repos',
})
