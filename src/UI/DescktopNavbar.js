// dar estilos al navbar de escritorio y aplicar la misma animacion de ocultar y mostrar (ver Header estilos de div:nth-child(2))

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
    padding: 0 10px;
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
            font-weight: 300;
            color: #BDBDBD;
            margin-right: 20px;

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
          <div className="logoDesck">
              <img src={logo} alt='logo'/>
          </div>
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