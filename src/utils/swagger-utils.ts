import axios from 'axios'

export const convertSwaggerUrl = (swaggerUrl: string): string => {
  return swaggerUrl.replace('/swagger-ui.html', '/v2/api-docs')
}

export const getSwaggerInfo = (url: string): Promise<any> => {
  return axios.get(url)
}
