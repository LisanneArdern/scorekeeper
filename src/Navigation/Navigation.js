import styled from 'styled-components'

export default function Navigation() {
  return (
    <NavigationWrapper>
      <button isActive>Play</button>
      <button>History</button>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 1px;

  button {
    padding: 0.35em 1.2em;
    border: 0.1em solid black;
    margin: 0 0.3em 0.3em 0;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    width: 100%;
    border: none;
    color: ${props => (props.isActive ? '#ccc' : 'black')};
  }
`
