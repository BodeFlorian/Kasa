import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useLogements } from '../../utils/context/useLogements'

import Slideshow from '../../components/Slideshow'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

const StyledLogement = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logement {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__main,
    &__sub {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__details {
      font-weight: 500;
      &-title {
        color: #ff6060;
      }
    }

    &__host {
      display: flex;
      align-items: center;
      gap: 16px;

      &-name {
        color: #ff6060;
        font-size: 18px;
        font-weight: 500;
        text-align: right;
      }

      &-picture {
        border-radius: 50%;
        width: 72px;
        height: 72px;
        object-fit: cover;
      }
    }

    &__tags {
      ul {
        display: flex;
        gap: 16px;

        li {
          background-color: #ff6060;
          padding: 6px 16px;
          border-radius: 16px;
          font-size: 14px;
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }

  .collapse {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`

function FicheLogement() {
  const { idLogement } = useParams()
  const { logements, isLoading, error } = useLogements()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return <StyledLogement>Loading...</StyledLogement>
  }

  if (error) {
    return <StyledLogement>Error: {error.message}</StyledLogement>
  }

  const logement = logements
    ? logements.find((el) => el.id === idLogement)
    : null

  if (!logement) {
    return <StyledLogement>Logement not found</StyledLogement>
  }

  const [firstName, lastName] = logement.host.name.split(' ', 2)

  return (
    <StyledLogement>
      <Slideshow pictures={logement.pictures} />
      <div className="logement">
        <div className="logement__main">
          <div className="logement__details">
            <h1 className="logement__details-title">{logement.title}</h1>
            <span className="logement__details-location">
              {logement.location}
            </span>
          </div>
          <div className="logement__host">
            <span className="logement__host-name">
              {firstName} <br /> {lastName}
            </span>
            <img
              src={logement.host.picture}
              alt=""
              className="logement__host-picture"
            />
          </div>
        </div>
        <div className="logement__sub">
          <div className="logement__tags">
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={`${logement.id}-tag-${index}`}>{tag}</li>
              ))}
            </ul>
          </div>
          <Rating rate={logement.rating} />
        </div>
      </div>
      <div className="collapse">
        <Collapse summary="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse summary="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={`${logement.id}-équipement-${index}`}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </StyledLogement>
  )
}

export default FicheLogement
