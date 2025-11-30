# @kutsan/eslint-config

## Usage

Install the config package:

```sh
npm add @kutsan/eslint-config --save-dev
```

Then use it in your `eslint.config.ts` file:

```typescript
import { eslintConfig } from '@kutsan/eslint-config'
import { defineConfig } from 'eslint/config'

const config = defineConfig([
  eslintConfig({
    configs: ['node'],
  }),
])

export default config
```
