import React from 'react'
import ReactDOM from 'react-dom/client'
import 'common/translations'
import { Snackbar } from 'components'
import { App } from './App'
import { GlobalStyles } from './globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Snackbar />
  </React.StrictMode>
)
