import tseslint from 'typescript-eslint'

import { baseConfig } from './configs/base.js'
import { ignoreConfig } from './configs/ignore.js'
import { nodeConfig } from './configs/node.js'
import { reactNativeConfig } from './configs/react-native.js'
import { reactConfig } from './configs/react.js'
import { webConfig } from './configs/web.js'
import type { ConfigArray } from './types/config.js'

type ConfigName = 'react' | 'react-native' | 'node' | 'web'

export function eslintConfig(options: { configs: ConfigName[] }): ConfigArray {
  const configMappings: Record<ConfigName, ConfigArray> = {
    react: reactConfig,
    'react-native': reactNativeConfig,
    node: nodeConfig,
    web: webConfig,
  }
  const configs = options.configs.map(
    (configName: ConfigName) => configMappings[configName],
  )

  return tseslint.config(ignoreConfig, baseConfig, configs)
}
