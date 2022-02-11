import styled from 'styled-components'

import flecha from '../assets/Iconos/flecha.svg'
import data from '../data/slides.json'
import Slide from './Slide'
import { useState } from 'react'
import getImages from '../helpers/getImage'
import { useDispatch } from 'react-redux'
import { setLoaded } from '../actions/carrusel'

const StyleCarrusel = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #111111;

    .flechas {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-between;

        img {
            width: 24px;
            height: 24px;

            &:last-of-type {
                transform: rotate(180deg);
            }
        }
    }
`

const Carrusel = () => {

    const dispatch = useDispatch()
    const slidesData = data.slides
    const [index, setIndex] = useState(0)

    getImages(require.context('../assets/slides', false, /\.jpg$/), slidesData)
    
    const next = () => {
        dispatch( setLoaded(false) )
        setTimeout( () => {
            (index >= slidesData.length - 1) ? setIndex(0) : setIndex(index + 1)
        }, 500 )
    }
    const back = () => {
        dispatch( setLoaded(false) )
        setTimeout( () => {
            (index <= 0) ? setIndex( slidesData.length - 1 ) : setIndex(index - 1)
        }, 500 )
    }
    

    return (

        <StyleCarrusel id='inicio'>
            <div className='flechas'>
                <img src={flecha} alt='Flecha izquierda' onClick={back}/>
                <img src={flecha} alt='Flecha derecha' onClick={next}/>
            </div>
            <Slide slide={slidesData[index]} />
        </StyleCarrusel>

    )
}

export default Carrusel