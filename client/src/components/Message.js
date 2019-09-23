import React from 'react'
import PropTypes from 'prop-types'

Message.propTypes = {
  msg: PropTypes.string.isRequired,

}

function Message ({ msg, closeMessage }) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {msg}
      <button type="button" onClick={closeMessage} className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Message