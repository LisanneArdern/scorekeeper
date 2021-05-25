import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, id, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          key={id}
          to={id}
          disabled={disabled}
        >
          {title}
        </NavButton>
      ))}
      {/* {pages.map(({ title, id }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title.slice(0, 1).toUpperCase() + title.slice(1)}
        </NavButton>
      ))} */}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
