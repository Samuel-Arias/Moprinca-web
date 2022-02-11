import styled from 'styled-components';

import { Titulo } from "../styles/components/globalStyles"
import copo from '../assets/Iconos/copo-nieve.svg'
import elect from '../assets/Iconos/electricidad.svg'
import plome from '../assets/Iconos/grifo.svg'
import drywall from '../assets/Iconos/wall.svg'
import brocha from '../assets/Iconos/brocha.svg'
import gota from '../assets/Iconos/not-water.svg'

const ContainerServs = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Card = styled.div`
    width: 81px;
    padding: 18px 0;
    background-color: #002270;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:nth-child(5), :nth-child(6) {
        margin-top: 38px;
    }

    &:nth-child(2), :nth-child(3), :nth-child(5) {
        margin-right: 21px;
    }

    img {
        width: 55px;
        height: 55px;
        margin-bottom: 4px;
    }

    p {
        width: 100%;
        text-align: center;
        color: #FFFFFF;
        font-weight: 100;
        font-size: 13px;
    }
`

const CardPrincipal = styled.div`
    width: 255px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 9px;
    background-color: #002270;
    border-radius: 15px;
    margin-bottom: 38px;

    img {
        width: 75px;
        height: 75px;
        margin-right: 9px;
    }

    span {
        width: auto;
        color: #FFFFFF;
        font-weight: 100;
        font-size: 13px;

        ul {
            margin-top: 15px;
            margin-left: 15px;
        }
    }
`

const Servicios = () => {
    return (
        <div>
            <Titulo>
                <p>Servicios</p>
            </Titulo>
            <ContainerServs>
                <CardPrincipal width={255} FD>
                    <img src={copo} alt='Copo de nieve'/>
                    <span>
                        Equipos de refrigeracion y climatizacion:
                        <ul>
                            <li>Reparacion</li>
                            <li>Instalacion</li>
                            <li>mantenimiento</li>
                        </ul>
                    </span>
                </CardPrincipal>
                <Card>
                    <img src={elect} alt='Rayo'/>
                    <p>Electricidad</p>
                </Card>
                <Card>
                    <img src={plome} alt='Grifo'/>
                    <p>Plomeria</p>
                </Card>
                <Card>
                    <img src={drywall} alt='Muro'/>
                    <p>Drywall</p>
                </Card>
                <Card>
                    <img src={brocha} alt='Brocha'/>
                    <p>Pintura</p>
                </Card>
                <Card>
                    <img src={gota} alt='Gota'/>
                    <p>Impermea- <br/> bilizacion</p>
                </Card>
            </ContainerServs>
        </div>
    )
}

export default Servicios
