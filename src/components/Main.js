import Header from './Header.js'
import Navbar from '../UI/Navbar.js'
import { DivSeparacion, MainContainer } from '../styles/components/globalStyles'
import Trabajos from './Trabajos.js'
import Contacto from './Contacto.js'
import Carrusel from './Carrusel.js'
import Servicios from './Servicios.js'
import SobreNosotros from './SobreNosotros.js'

const Main = () => {
  return (

    <>
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

    </>

  )
}

export default Main