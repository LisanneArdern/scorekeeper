import styled from 'styled-components'

export default function History({ name, score }) {
  return (
    <HistoryWrapper>
      <h2>Title</h2>
      <Scoreoverview>
        <div>{name}</div>
        <div>{score}</div>
      </Scoreoverview>
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.section`
  display: grid;
`
const Scoreoverview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
