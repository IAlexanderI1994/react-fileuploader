import React from 'react'
import PropTypes from 'prop-types'

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
}

function Progress ({ percentage }) {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-info"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >

      {percentage}%
      </div>
    </div>
  )
}

export default Progress