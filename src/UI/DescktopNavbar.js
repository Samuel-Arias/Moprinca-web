import styled, { keyframes } from "styled-components"

import logo from '../assets/Iconos/Moproinca-logo.svg'

const mostrar = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(72px);
    }
`

const ocultar = keyframes`
    from {
        transform: translateY(72px);
    }
    to {
        transform: translateY(0);
    }
`

const StyledNavbar = styled.div`
    width: 100%;
    height: max-content;
    padding: 0 20px 0 0;
    background-color: #FFFFFF;
    box-shadow: 0 1px 5px rgba(0,0,0,.25);

    position: fixed;
    top: -72px;
    left: 0;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    animation: ${({hidden}) => hidden ? mostrar : ocultar} .3s linear both;

    .logoDesck {
        width: 229px;
        height: 50px;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .links {
        height: 100%;
        display: flex;

        a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 400;
            color: #BDBDBD;
            margin-right: 20px;
            transition: color .3s;

            &:hover:nth-child(1) {
                color: #002270;
            }
            &:hover:nth-child(2) {
                color: #333258;
            }
            &:hover:nth-child(3) {
                color: #614142;
            }
            &:hover:nth-child(4) {
                color: #982b1f;
            }
            &:hover:nth-child(5) {
                color: #e96c01;
            }

            &:last-child {
                margin-right: 0;
            }

            @media (min-width: 850px) {
                margin-right: 45px;
            }

        }
    }
`

const DescktopNavbar = ({show}) => {
  return (
      <StyledNavbar hidden={show}>
          <a className="logoDesck" href='#inicio'>
              <img src={logo} alt='logo'/>
          </a>
          <div className="links">
              <a href='#inicio'>Inicio</a>
              <a href='#sobre-nosotros'>Sobre nosotros</a>
              <a href='#servicios'>Servicios</a>
              <a href='#trabajos'>Trabajos</a>
              <a href='#contacto'>Contacto</a>
          </div>
      </StyledNavbar>
  )
}

export default DescktopNavbar