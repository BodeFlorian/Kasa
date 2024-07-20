import styled from 'styled-components'
import logo from './../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Header() {
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

  const StyledLink = styled(Link)`
    font-size: 24px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <ul>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">À propos</StyledLink>
      </ul>
    </StyledHeader>
  )
}

export default Header
