import styled from 'styled-components'

export default function Navigation() {
  return (
    <NavigationWrapper>
      <button>Play</button>
      <button>History</button>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 1px;

  button {
    width: 100%;
    border: none;
    color: ${props => (props.isActive ? '#ccc' : 'black')};
  }
`
