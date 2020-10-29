import { createGlobalStyle } from 'styled-components'

import reset from 'styled-reset'
import { device } from './media-queries'

export const GlobalStyles = createGlobalStyle`
  ${reset}
`
