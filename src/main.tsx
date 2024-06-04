import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/index.css'
import App from '@/App.tsx'

const root = document.getElementById('root')

if (!root) throw new Error('cannot find root element!')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
