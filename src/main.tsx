import React from 'react'
import ReactDOM from 'react-dom/client'
import 'common/translations'
import { Snackbar } from 'modules'
import { App } from './app'
import { GlobalStyles } from './global-styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Snackbar />
  </React.StrictMode>
)
