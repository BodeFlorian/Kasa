import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrow from '../../assets/icon/arrow.png'

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const StyledSlideshow = styled.div`
  height: 50vh;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  background-image: url(${arrow});
  background-size: cover;
  width: 64px;
  height: 64px;
  cursor: pointer;

  &.arrow {
    &-left {
      left: 0;
      transform: translateY(-50%) rotate(-90deg);
    }

    &-right {
      right: 0;
      transform: translateY(-50%) rotate(90deg);
    }
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)
  const length = pictures.length - 1

  const handlePrev = (e) => {
    setIndex(index === 0 ? length : index - 1)
  }

  const handleNext = (e) => {
    setIndex(index === length ? 0 : index + 1)
  }

  return (
    <StyledSlideshow>
      {length >= 0 && (
        <>
          <Arrow className="arrow-left" onClick={handlePrev} />
          <Arrow className="arrow-right" onClick={handleNext} />
        </>
      )}
      <ImageContainer src={pictures[index]} />
    </StyledSlideshow>
  )
}

export default Slideshow
