import styled from 'styled-components'
import logo from './../../assets/img/logo.png'

const StyledFooter = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 64px;
  margin-top: 100px;

  p {
    color: #fff;
    font-size: 24px;
  }
`

const Logo = styled.img`
  width: 128px;
  object-fit: cover;
  filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(89%)
    hue-rotate(188deg) brightness(116%) contrast(100%);
`

function Footer() {
  return (
    <StyledFooter>
      <Logo src={logo} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  )
}

export default Footer
