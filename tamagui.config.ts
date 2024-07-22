import { config } from '@tamagui/config/v3'

import { createTamagui } from 'tamagui' // or '@tamagui/core'
import * as themes from './theme-output'

const appConfig = createTamagui({
  themes,
  config
}) 
export type AppConfig = typeof appConfig
declare module 'tamagui' {

  // or '@tamagui/core'

  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  interface TamaguiCustomConfig extends AppConfig {}

}
export default appConfig