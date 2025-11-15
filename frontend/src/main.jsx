
import React from 'react'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppMaintenance from './AppMaintenance.jsx'
import { store, persistor } from './store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <App /> */}
          <AppMaintenance />
        </PersistGate>
      </Provider>
    </Router>
  // </StrictMode>
)
