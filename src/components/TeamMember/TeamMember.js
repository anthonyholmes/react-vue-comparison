import React from 'react'
import PropTypes from 'prop-types'

function TeamMember({ name }) {
  return (
    <div>{name}</div>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string
}

export default TeamMember
