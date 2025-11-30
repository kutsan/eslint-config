import type { Config } from 'eslint/config'

import { jsGlob, jsxGlob, tsGlob, tsxGlob } from './files-globs.ts'

export function mapTypeScriptEslintConfig(tseslintConfig: Config): Config {
  return {
    files: [jsGlob, jsxGlob, tsGlob, tsxGlob],
    ...tseslintConfig,
  }
}
