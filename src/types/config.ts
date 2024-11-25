import type tseslint from 'typescript-eslint'

export type ConfigArray = ReturnType<typeof tseslint.config>
export type ConfigLanguageOptions = NonNullable<
  ConfigArray[number]['languageOptions']
>
export type ConfigPlugin = NonNullable<ConfigArray[number]['plugins']>[number]
