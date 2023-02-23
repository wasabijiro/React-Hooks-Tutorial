import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const wasabicodeInfo = {
  name: "wasabi",
  age: 21,
};

const WasabiCodeContext = createContext(wasabicodeInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WasabiCodeContext.Provider value={wasabicodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </WasabiCodeContext.Provider>
)

export default WasabiCodeContext;