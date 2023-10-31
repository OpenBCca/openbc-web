import * as config from '@/../next.config'

export const basePath =
  process.env.NODE_ENV === 'production' ? `/${config.basePath}` : ''
