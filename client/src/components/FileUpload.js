import React, { Fragment } from 'react'

function FileUpload (props) {

  return (
    <Fragment>

      <form>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile"/>
          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
        </div>
        <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
      </form>


    </Fragment>
  )
}

export default FileUpload