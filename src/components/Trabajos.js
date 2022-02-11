import styled from 'styled-components'

import { Titulo } from "../styles/components/globalStyles"
import TAire from '../assets/Trabajos/Reparación y mantenimiento aires acondicionados 6.jpeg'
import TParedes from '../assets/Trabajos/Resanamiento en paredes.jpeg'
import TTecho from '../assets/Trabajos/Impermeabilizacion y fabricación techo 5.jpeg'
import TDrywall from '../assets/Trabajos/Fabricación de drywall 2.jpeg'
import TPiso from '../assets/Trabajos/Instalación piso laminado.jpeg'
import TElectrico from '../assets/Trabajos/Fabricación puntos eléctricos.jpeg'
import TElecOrden from '../assets/Trabajos/Reordenamiento eléctrico.jpeg'
import TPuerta from '../assets/Trabajos/instalacion-puerta-vidrio 2.jpeg'
import TAgua from '../assets/Trabajos/Fabricación puntos de agua e instalación de bomba de agua.jpeg'

const ContJobs = styled.div`
    width: 100%;
    height: 753px; /*El height sera condicional, dependera de cuando apretemos el moreJobs*/
    overflow-y: hidden; /*Lo mismo para el overflow*/
`

const CardJob = styled.div`
    width: 100%;
    height: max-content;
    margin-bottom: 28px;

    img {
        width: 100%;
        height: 197px;
        object-fit: cover;
        object-position: center;        
        border-radius: 10px;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,.5);
    }

    p {
        width: 100%;
        font-weight: 300;
        font-size: 16px;
    }
`

const MoreJobs = styled.p`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    color: #002270;
    text-decoration: underline;
    margin-top: 25px;
`

const Trabajos = () => {
  return (
      <div>

        <Titulo>
            <p>Trabajos</p>
        </Titulo>

        <ContJobs>

            <CardJob>
                <img src={TAire} alt='Trabajo aire'/>
                <p>Reparacion y mantenimineto de aire acondicionado</p>
            </CardJob>
            <CardJob>
                <img src={TParedes} alt='Trabajo paredes'/>
                <p>Resanamineto de paredes</p>
            </CardJob>
            <CardJob>
                <img src={TTecho} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TDrywall} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TPiso} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TElectrico} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TElecOrden} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TPuerta} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>
            <CardJob>
                <img src={TAgua} alt='Trabajo techo'/>
                <p>Impermeabilizacion y fabricacion de techo</p>
            </CardJob>

        </ContJobs>
        
        <MoreJobs>ver mas trabajos</MoreJobs>

      </div>
    )
}

export default Trabajos
