import styled from 'styled-components'

import Banner from '../../components/Banner'
import Card from '../../components/Card'

import logements from './../../datas/logements.json'

import banner1 from './../../assets/img/Banner/banner1.png'

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 64px;
  flex: 1;
`

const StyledLogements = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

function Home() {
  return (
    <StyledHome>
      <Banner texte="Chez vous, partout et ailleurs" picture={banner1} />

      <StyledLogements>
        {logements.slice(0, 6).map((logement) => (
          <Card
            key={logement.id}
            idLogement={logement.id}
            picture={logement.pictures[0]}
            title={logement.title}
          />
        ))}
      </StyledLogements>
    </StyledHome>
  )
}

export default Home
