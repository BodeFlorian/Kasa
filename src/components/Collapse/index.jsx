import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrow from '../../assets/icon/arrow.png'

Collapse.propTypes = {
  summary: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

const StyledCollapse = styled.div`
  .collapse {
    &__summary {
      cursor: pointer;
      background-color: #ff6060;
      color: #fff;
      padding: 16px;
      font-size: 18px;
      font-weight: 700;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: '';
        background-image: url(${arrow});
        background-size: cover;
        width: 24px;
        height: 24px;
        transition: transform 0.3s ease-in-out;
        transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
      }
    }

    &__content {
      transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
      visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
      opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
      transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-50%')});
      padding: 16px;
    }
  }
`

function Collapse({ summary, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledCollapse $isOpen={isOpen}>
      <div className="collapse__summary" onClick={toggleCollapse}>
        {summary}
      </div>
      <div className="collapse__content">{children}</div>
    </StyledCollapse>
  )
}

export default Collapse
