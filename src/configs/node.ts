import type { ConfigArray } from '../types/config.js'
import { nodeGlobals } from '../utils/globals.js'

export const nodeConfig: ConfigArray = [
  {
    languageOptions: {
      globals: nodeGlobals,
    },
  },
]
