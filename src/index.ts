import { type Config, defineConfig } from 'eslint/config'

import { baseConfig } from './configs/base.ts'
import { ignoreConfig } from './configs/ignore.ts'
import { nodeConfig } from './configs/node.ts'
import { reactNativeConfig } from './configs/react-native.ts'
import { reactConfig } from './configs/react.ts'
import { webConfig } from './configs/web.ts'

type ConfigName = 'react' | 'react-native' | 'node' | 'web'

export function eslintConfig(options: { configs: ConfigName[] }): Config[] {
  const configMappings: Record<ConfigName, Config[]> = {
    react: reactConfig,
    'react-native': reactNativeConfig,
    node: nodeConfig,
    web: webConfig,
  }
  const selectedConfigs = options.configs.map(
    (configName: ConfigName) => configMappings[configName],
  )

  return defineConfig(ignoreConfig, baseConfig, ...selectedConfigs)
}
