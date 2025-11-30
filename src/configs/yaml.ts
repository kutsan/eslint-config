import pluginYaml from 'eslint-plugin-yml'
import type { Config } from 'eslint/config'

import { yamlGlob } from '../utils/files-globs.ts'

export const yamlConfig: Config[] = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- The plugin does not use eslint/config types.
  ...(pluginYaml.configs['flat/recommended'] as Config[]).map((yamlConfig) => ({
    ...yamlConfig,
    files: [yamlGlob],
  })),
]
