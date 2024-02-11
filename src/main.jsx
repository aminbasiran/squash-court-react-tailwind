import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './ContextProvider.jsx';
import Layout from './components/Layout/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
      <App/>

      </Layout>

    </ContextProvider>
  </React.StrictMode>,
)
