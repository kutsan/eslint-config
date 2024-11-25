// import pluginReact from 'eslint-plugin-react';
// import pluginReactHooks from 'eslint-plugin-react-hooks';
// import pluginReactRefresh from 'eslint-plugin-react-refresh';
import type { ConfigArray } from '../types/config.js'
import { tsxGlob } from '../utils/files-globs.js'
import { reactTypeScriptLanguageOptions } from '../utils/language-options.js'

export const reactConfig: ConfigArray = [
  {
    files: [tsxGlob],
    languageOptions: reactTypeScriptLanguageOptions,
  },
  // {
  //   files: [tsGlob, tsxGlob],
  //   plugins: {
  //     react: pluginReact as ESLint.Plugin,
  //     'react-hooks': pluginReactHooks
  //   },
  //   settings: {
  //     react: {
  //       version: "detect",
  //     },
  //   },
  //   rules: {
  //     ...pluginReact.configs.flat.recommended.rules,
  //     ...pluginReactHooks.configs.recommended.rules,
  //   },
  // },
  // {
  //   files: [tsxGlob],
  //   plugins: {
  //     'react-refresh': pluginReactRefresh,
  //   },
  //   rules: {
  //     "react-refresh/only-export-components": "error",
  //   },
  // }
]
