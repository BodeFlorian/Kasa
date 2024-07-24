import PropTypes from 'prop-types'
import styled from 'styled-components'

import star from '../../assets/icon/star.png'

Rating.propTypes = {
  rate: PropTypes.string.isRequired,
}

const StyledRating = styled.div`
  display: flex;
  gap: 4px;
`

const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${star});
  background-size: cover;
  margin-right: 2px;
  filter: ${(props) =>
    props.$filled
      ? 'brightness(0) saturate(100%) invert(49%) sepia(72%) saturate(1961%) hue-rotate(324deg) brightness(104%) contrast(116%)'
      : ''};
`

function Rating({ rate }) {
  const totalStars = 5
  const stars = []

  for (let i = 0; i < totalStars; i++) {
    stars.push(<Star key={i} $filled={i < rate} />)
  }

  return <StyledRating>{stars}</StyledRating>
}

export default Rating
