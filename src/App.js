import Header from './components/Header.js'
import Servicios from './components/Servicios.js'
import SobreNosotros from './components/SobreNosotros.js'

import './App.css'
import { DivSeparacion, MainContainer } from './styles/components/globalStyles.js'
import Trabajos from './components/Trabajos.js'
import Contacto from './components/Contacto.js'
import Footer from './components/Footer.js'
import Carrusel from './components/Carrusel.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Navbar from './UI/Navbar.js'

function App() {
  return (

    <Provider store={store}>

      <Header />
      <Navbar />
      <Carrusel />

      <MainContainer>

        <DivSeparacion id='sobre-nosotros'/>
        <SobreNosotros />
        <DivSeparacion id='servicios'/>
        <Servicios />
        <DivSeparacion id='trabajos'/>
        <Trabajos />
        <DivSeparacion id='contacto'/>
        <Contacto />

      </MainContainer>

      <Footer />

    </Provider>
    
  )
}

export default App
