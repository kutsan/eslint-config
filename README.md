# @kutsan/eslint-config

## Usage

Install the config package:

```sh
npm install @kutsan/eslint-config --save-dev
```

Then use it in your `eslint.config.js` file:

```javascript
import { eslintConfig } from '@kutsan/eslint-config'

const config = [
  ...eslintConfig({
    configs: ['node'],
  }),
]

export default config
```
