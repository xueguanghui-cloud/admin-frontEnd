/** @format */

/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod'

interface IEnvConfig {
  [key: string]: {
    baseApi: string
    mockApi: string
  }
  development: {
    baseApi: string
    mockApi: string
  }
  test: {
    baseApi: string
    mockApi: string
  }
  production: {
    baseApi: string
    mockApi: string
  }
}

const EnvConfig: IEnvConfig = {
  development: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/275021dd7fb89f79a158f6f95ab62b65/api'
  },
  test: {
    baseApi: '/',
    mockApi: ''
  },
  production: {
    baseApi: '/',
    mockApi: ''
  }
}

export default {
  env: 'dev',
  mock: true,
  ...EnvConfig[env]
}
