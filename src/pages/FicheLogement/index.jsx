import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogement = styled.div`
  flex: 1;
`

function FicheLogement() {
  const { idLogement } = useParams()

  return <StyledLogement></StyledLogement>
}

export default FicheLogement
