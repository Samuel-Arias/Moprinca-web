import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { store } from './store/store.js'
import Main from './components/Main.js'
import Trabajo from './components/Trabajo.js'
import Footer from './components/Footer.js'

import './App.css'

function App() {
  return (

    <BrowserRouter>

      <Provider store={store}>

        <Routes>

          <Route path='/' element={<Main />}/>
          <Route path='/trabajo' element={<Trabajo />}/>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />

        </Routes>

        <Footer />

      </Provider>

    </BrowserRouter>
    
  )
}

export default App
