import { eslintConfig } from './src/index.ts'

const config = [
  ...eslintConfig({
    configs: ['node'],
  }),
]

export default config
