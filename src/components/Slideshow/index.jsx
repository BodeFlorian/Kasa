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

  .img {
    position: relative;
    width: 100%;
    height: 100%;

    &__length {
      position: absolute;
      color: #fff;
      bottom: 16px;
      font-size: 24px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }

  @media screen and (max-width: 480px) {
    height: 40vh;
    aspect-ratio: 1;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  background-image: url(${arrow});
  background-size: cover;
  width: 64px;
  height: 64px;
  cursor: pointer;
  z-index: 1;

  &.arrow-left {
    left: 0;
    transform: translateY(-50%) rotate(-90deg);
  }

  &.arrow-right {
    right: 0;
    transform: translateY(-50%) rotate(90deg);
  }

  @media screen and (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${(props) => (props.$isVisible ? '' : 'translateX(100%)')};
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isVisible ? '1' : '0')};
  transition:
    transform 0.5s ease-in-out,
    visibility 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
`

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)
  const length = pictures.length - 1

  const handlePrev = () => {
    setIndex(index === 0 ? length : index - 1)
  }

  const handleNext = () => {
    setIndex(index === length ? 0 : index + 1)
  }

  return (
    <StyledSlideshow>
      {length > 1 && (
        <>
          <Arrow className="arrow-left" onClick={handlePrev} />
          <Arrow className="arrow-right" onClick={handleNext} />
          <div className="img__length">
            <p>{`${index + 1 + '/' + (length + 1)}`}</p>
          </div>
        </>
      )}
      <div className="img">
        {pictures.map((pic, idx) => (
          <Image key={`image-${idx}`} src={pic} $isVisible={index === idx} />
        ))}
      </div>
    </StyledSlideshow>
  )
}

export default Slideshow
