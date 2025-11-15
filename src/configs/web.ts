import type { Config } from 'eslint/config'

import { browserGlobals } from '../utils/globals.ts'

export const webConfig: Config[] = [
  {
    languageOptions: {
      globals: browserGlobals,
    },
  },
]
