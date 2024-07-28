import styled from 'styled-components'

import Banner from '../../components/Banner'
import Card from '../../components/Card'

import { useLogements } from '../../utils/context/useLogements'

import banner1 from '../../assets/img/Banner/banner1.png'

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;

  @media screen and (max-width: 480px) {
    gap: 24px;
  }
`

const StyledLogements = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`

function Home() {
  const { logements, isLoading, error } = useLogements()

  return (
    <StyledHome>
      <Banner texte="Chez vous, partout et ailleurs" picture={banner1} />

      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Error: {error.message}</span>
      ) : (
        <StyledLogements>
          {logements &&
            logements
              .slice(0, 6)
              .map((logement) => (
                <Card
                  key={logement.id}
                  idLogement={logement.id}
                  picture={logement.cover}
                  title={logement.title}
                />
              ))}
        </StyledLogements>
      )}
    </StyledHome>
  )
}

export default Home
