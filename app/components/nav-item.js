import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const NavItem = ({ classes, to, name }) => {
  return (
    <li className={classes}><Link to={to}>{name}</Link></li>
  )
}

NavItem.propTypes = {
  classes: PropTypes.string,
  to: PropTypes.string,
  name: PropTypes.string
}

export default NavItem
