import React from 'react'
import {Views} from '../views'
import {Main} from './style'
import {GlobalStyle} from './globalStyle'

export const App = () => (
  <Main>
    <GlobalStyle />
    <Views />
  </Main>
)