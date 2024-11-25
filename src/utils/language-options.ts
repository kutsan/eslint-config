import tseslint from 'typescript-eslint'

import type { ConfigLanguageOptions } from '../types/config.js'

export const reactTypeScriptLanguageOptions: ConfigLanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    ecmaFeatures: { modules: true, jsx: true },
    project: true,
  },
}

export const typeScriptLanguageOptions: ConfigLanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    ecmaFeatures: { modules: true },
    project: true,
  },
}
