import type { Config } from 'eslint/config'

import { nodeGlobals } from '../utils/globals.ts'

export const nodeConfig: Config[] = [
  {
    languageOptions: {
      globals: nodeGlobals,
    },
  },
]
