import get from 'lodash/get'
import uiJson from '../ui.json'

export function t(str: string) {
  // TODO: load the locale appropriate ui.json file
  return get(uiJson, str)
}
