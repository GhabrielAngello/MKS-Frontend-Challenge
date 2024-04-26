import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SelectedItemProvider from './Context/SelectedItemContext.jsx'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <SelectedItemProvider>
        <App />
      </SelectedItemProvider>  
    </QueryClientProvider>
  </React.StrictMode>,
)
