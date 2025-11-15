import globals from 'globals'

export const browserGlobals = {
  ...globals.browser,
  ...globals.serviceworker,
}

export const nodeGlobals = {
  ...globals.node,
}
