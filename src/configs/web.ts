import type { ConfigArray } from '../types/config.js'
import { browserGlobals } from '../utils/globals.js'

export const webConfig: ConfigArray = [
  {
    languageOptions: {
      globals: browserGlobals,
    },
  },
]
