import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { Redirect, Switch, Route, Link } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
  ),
}

//  pages = [
//  { name:'create', path: '/'},
//  {name: 'history', path: '/history'}
//  ]
export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path }) => (
        <Link key={name} to={path}>
          {name}
        </Link>
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
