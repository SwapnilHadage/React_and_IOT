import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,} from 'react-router'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import toast from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <toast/>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
