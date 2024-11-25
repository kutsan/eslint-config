export default {
  '*.{js,ts,tsx}': [
    'eslint --max-warnings=0 --flag unstable_ts_config',
    'prettier --write',
  ],
  '*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{json,md}': ['prettier --write'],
}
