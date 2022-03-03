import equipo from '../assets/sobre-nosotros.jpeg'
import manos from '../assets/manos.jpg'
import reunion from '../assets/reunion.jpg'
import { Texto, Titulo } from '../styles/components/globalStyles'
import styled from 'styled-components'

const MainText = styled.div`
    width: 100%;

    img {
        width: 165px;
        height: 211px;
        float: right;
        margin-left: 8px;
        overflow: hidden;
        border-radius: 2px;
        object-fit: cover;
        object-position: -38px;
    }

    @media (min-width: 515px) {
        height: 216px;
        display: flex;

        img {
            width: 60%;
            height: 100%;
            margin-left: 0px;
            margin-right: 8px;
            object-position: center;
            float: none;
        }
    }

    @media (min-width: 1075px) {
        img {
            object-position: center -100px;
        }
    }

    @media (min-width: 1350px) {
        img {
            object-position: center -130px;
        }
    }
`

const Card = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    
    p {
        width: 50%;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: #002270;
        margin-bottom: 6px;
        align-self: ${
            ({number}) => ( (number === 2) ? 'flex-end' : 'flex-start' )
        };
    }

    div {
        width: 100%;
        height: 157px;
        display: flex;
        flex-direction: ${
            ({number}) => (
                (number === 2) ? 'row-reverse' : 'row'
            )
        };
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.30);

        p {
            width: 50%;
            font-size: 13px;
            font-weight: 300;
            padding: 4px;
            align-self: center;
            text-align: justify;
            color: #000000;
        }
        
        img {
            width: 50%;
            height: 100%;
            object-fit: cover;
            object-position: center;

        }
    }

    @media (min-width: 645px) {
        display: inline-block;
        width: 48%;

        &:last-of-type {
            float: right;
            align-self: stretch;
        }
        
        p {
            width: 100%;
        }

        div {
            height: 180px;
        }
    }

    @media (min-width: 781px) {
        p {
            font-size: 22px;
        }

        div p {
            font-size: 15px;
        }
    }

    @media (min-width: 1100px) {
        div {
            height: 210px;
        }
    }

    @media (min-width: 1300px) {
        p {
            font-size: 24px;
        }

        div p {
            font-size: 18px;
        }
    }
`

const SobreNosotros = () => {
    return (
        <div>
            <Titulo>
                <p>Sobre nosotros</p>
            </Titulo>

            <MainText>
                <img src={equipo} alt='equipo-moproinca' />
                <Texto>
                    Moproinca es un empredimiento desarrollado en noviembre de 2020 por un grupo de técnicos profesionales con más de 9 años de experiencia en áreas civiles, mecánicas y eléctricas, para ofrecer múltiples servicios que le  brindan comodidad y satisfacción a nuestros clientes.
                </Texto>
            </MainText>

            <Card>
                <p>Mision</p>
                <div>
                    <p>Nuestra misión es elevar continuamente el nivel de satisfacción de nuestros clientes. ofreciendo la variedad más amplia de servicio civiles, mecánicos y eléctricos.</p>
                    <img src={manos} alt='manos' />
                </div>
            </Card>

            <Card number={2}>
                <p>Vision</p>
                <div>
                    <p>Nuestra vision es poder brindar cada día un mejor servicio a nuestros clientes para formar relaciones duraderas y de esta forma generar más fuentes de empleo.</p>
                    <img src={reunion} alt='reunion' />
                </div>
            </Card>
        </div>
    )
}

export default SobreNosotros
