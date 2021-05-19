import styled from 'styled-components'
import Title from '../Title/Title'

export default function History({ name }) {
  return (
    <HistoryWrapper>
      <Title />
      <div>{name}</div>
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.section`
  background-color: hotpink;
`
