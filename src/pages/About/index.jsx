import useFetch from '../../utils/hooks/useFetch'
import styled from 'styled-components'

import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

import banner2 from '../../assets/img/Banner/banner2.png'

const StyledAbout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
`

function About() {
  const { data, isLoading, error } = useFetch('/datas/about.json')

  return (
    <StyledAbout>
      <Banner picture={banner2} />
      <div className="about">
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>Error: {error.message}</span>
        ) : (
          data &&
          data.map((about, index) => (
            <Collapse key={`about-${index}`} summary={about.summary}>
              <p>{about.content}</p>
            </Collapse>
          ))
        )}
      </div>
    </StyledAbout>
  )
}

export default About
