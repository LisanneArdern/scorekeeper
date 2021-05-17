import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={isActive ? 'Button Button--active' : 'Button'}
    >
      {children}
    </button>
  )
}
