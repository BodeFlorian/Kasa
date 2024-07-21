import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledError = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  span {
    font-size: 256px;
    font-weight: 800;
    color: #ff6060;
  }

  p {
    font-size: 32px;
    font-weight: 600;
    color: #ff6060;
  }

  a {
    text-decoration: underline;
    font-size: 18px;
    font-weight: 600;
  }
`

function Error() {
  return (
    <StyledError>
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </StyledError>
  )
}

export default Error
