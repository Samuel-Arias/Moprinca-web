import styled from 'styled-components'
import { useEffect, useRef } from 'react'

import arrow from '../assets/Iconos/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLoaded } from '../actions/carrusel'
import { showLogo, hiddenLogo } from '../actions/UI'

const StyleSlide = styled.div`
    width: 100%;
    height: 100%;
    transition: .3s ease all;
    z-index: 5;
    position: relative;
    opacity: 0;
    transition: all .5s;

    &.loaded {
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.65);
    }

    div:first-of-type {
        position: absolute;
        top: 50%;
        transform: translateY(-50%); 
        width: 100%;
        
        p {
            width: 310px;
            margin: 0 auto;
            text-align: center;
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-size: 30px;
            font-weight: 700;
        }
    }

    div:last-of-type {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;

        a img {
            width: 30px;
        }

        p {
            width: 100%;
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 300;
        }
    }
`

const Slide = ({slide}) => {

    const ref = useRef();
    const dispatch = useDispatch();
    const {loaded} = useSelector( state => state.Carrusel.img )

    useEffect(() => {

      const onChange = entries => entries.forEach(
          entry => {
              if ( entry.target === ref.current ) {
                  entry.isIntersecting ? dispatch( showLogo() ) : dispatch( hiddenLogo() )
              }
          }
      )
      const observer = new IntersectionObserver( onChange, { threshold: 0.25 } )
      observer.observe(ref.current)
    
    }, [ref, dispatch]);

    return (

        <StyleSlide className={loaded ? 'loaded' : ''}>
            <img
                src={`${slide.img}`}
                alt='imgSlide'
                className='fondo'
                onLoad={() => dispatch(setLoaded(true))}
            />
            <div>
                <p ref={ref}>{`${slide.texto}`}</p>
            </div>
            <div>
                <p>{`${slide.textoLink}`}</p>
                <a href={`#${slide.linkArrow}`}><img src={arrow} alt={`Link ${slide.textoLink}`} /></a>
            </div>
        </StyleSlide>

    )
}

export default Slide
