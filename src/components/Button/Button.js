import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  margin: 0 0.3em 0.3em 0;
  display: inline-block;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: black;
  text-align: center;
  background-color: ${props => (props.isActive ? '#ccc' : 'white')};
  &.active {
    background: #ccc;
  }
  & [disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  component: PropTypes.any,
  disabled: PropTypes.bool,
}

export default function Button({
  component: Component = 'button',
  ...otherProps
}) {
  return <ButtonStyled as={Component} {...otherProps} />
}
