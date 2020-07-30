import React from 'react'
import PropTypes from 'prop-types'


const NavItem = ({ label, icon }) => (
  <div className='container-nav-item'>
    {icon}
    <p className='nav-item-label'>{label}</p>
  </div>
)

NavItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
}

export default NavItem
