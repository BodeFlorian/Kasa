import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.article`
  position: relative;
  aspect-ratio: 1;
  display: flex;
  padding: 16px;
  align-items: flex-end;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);

  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.2s ease-in-out;
  }

  span {
    font-size: 18px;
    font-weight: 800;
    color: #fff;
  }

  &:hover {
    img {
      transform: scale(1.04);
    }
  }
`

function Card({ idLogement, picture, title }) {
  return (
    <StyledCard>
      <Link to={`${'/location/' + idLogement}`}>
        <img src={picture} alt={title ? title : 'Titre de la location'} />
        <span>{title ? title : 'Titre de la location'}</span>
      </Link>
    </StyledCard>
  )
}

export default Card
