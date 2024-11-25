import { eslintConfig } from './src/index.js'

const config = [
  ...eslintConfig({
    configs: ['node'],
  }),
]

export default config
