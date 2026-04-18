import pluginYaml from 'eslint-plugin-yml'
import type { Config } from 'eslint/config'

import { yamlGlob } from '../utils/files-globs.ts'

export const yamlConfig: Config[] = [
  ...pluginYaml.configs['flat/recommended'].map((yamlConfig) => ({
    ...yamlConfig,
    files: [yamlGlob],
  })),
]
