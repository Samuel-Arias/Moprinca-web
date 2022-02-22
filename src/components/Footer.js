import styled from 'styled-components'

import insta from '../assets/Logos/instagram.png'
import face from '../assets/Logos/facebook.png'
import twitter from '../assets/Logos/twitter.png'
import logo from '../assets/Iconos/Moproinca-logo.svg'
import { MainContainer } from '../styles/components/globalStyles'

const StyleFooter = styled.footer`
  width: 100%;
  background-color: #002270;
`
const ContainerFoo = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 0 9px 0;

  .logo {
    margin-bottom: 22px;
  }

  p {
    font-size: 11px;
    font-weight: 100;
    color: #FFFFFF;
  }
`

const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 30px;

  a {
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }    
  }
`

const Footer = () => {
  return (

    <StyleFooter>

      <ContainerFoo>

        <Social>
          <a href='#'>
            <img src={insta} alt='Instagram'/>
          </a>
          <a href='#'>
            <img src={face} alt='Twitter'/>
          </a>
          <a href='#'>
            <img src={twitter} alt='Facebook'/>
          </a>
        </Social>

        <a href='#inicio' className='logo'><img src={logo} alt='Moproinca Logo'/></a>

        <p>© Copyright 2021 by Samuel Arias. All rights reserved.</p>

      </ContainerFoo>

    </StyleFooter>

  )

}

export default Footer;
