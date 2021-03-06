import merge from 'lodash.merge'

/**
 * Default configuration
 */
let config = {
  debug: false,
  autoTracking: true,
  id: null,
  manual: false,
  ignoreRoutes: []
}

/**
 * Returns the new configuation object
 * @param  {Object} params
 * @return {Object}
 */
export const updateConfig = function (params) {
  return merge(config, params)
}

export default config
