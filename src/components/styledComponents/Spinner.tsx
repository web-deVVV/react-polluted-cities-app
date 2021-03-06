import styled from 'styled-components'
import React from 'react'

const StyledSpinner = styled.div.attrs({
  role: 'status',
})`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => (
  <StyledSpinner>
    <span className="sr-only">Loading content...</span>
  </StyledSpinner>
)

export default Spinner
