import styled from 'styled-components'
import PropTypes from 'prop-types'

Banner.propTypes = {
  texte: PropTypes.string,
  picture: PropTypes.string.isRequired,
}

const StyledBanner = styled.div`
  width: 100%;
  height: 24vh;
  border-radius: 24px;
  overflow: hidden;
  background-color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  p {
    color: #fff;
    text-align: center;
    font-weight: 800;
    font-size: 32px;
    z-index: 1;
  }
`

function Banner({ texte, picture }) {
  return (
    <StyledBanner>
      <img src={picture} alt="Banner" />
      <p>{texte}</p>
    </StyledBanner>
  )
}

export default Banner
