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
  }
`

const Logo = styled.img`
  width: 200px;
  object-fit: cover;
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
