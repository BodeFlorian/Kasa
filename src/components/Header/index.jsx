import styled from 'styled-components'
import logo from './../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;

  ul {
    display: flex;
    gap: 64px;

    @media screen and (max-width: 1024px) {
      gap: 32px;
    }

    @media screen and (max-width: 768px) {
      gap: 24px;
    }

    @media screen and (max-width: 480px) {
      gap: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`

const Logo = styled.img`
  width: 200px;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 140px;
  }
`

const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">
        <Logo src={logo} alt="Kasa Logo" />
      </NavLink>

      <ul>
        <li>
          <StyledLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Accueil
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            À propos
          </StyledLink>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
