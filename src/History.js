import styled from 'styled-components'
import Title from './Title'

export default function History({ name, score }) {
  return (
    <HistoryWrapper>
      <Title />
      <div>
        {name}
        {score}
      </div>
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.section``
