import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Message from './Message'
import Progress from './Progress'

function FileUpload (props) {

  const [file, setFile]                   = useState('')
  const [filename, setFilename]           = useState('Choose file')
  const [uploadedFile, setUploadedFile]   = useState({})
  const [message, setMessage]             = useState('')
  const [uploadPercentage, setPercentage] = useState(0)

  const onChange = ({ target: { files } }) => {
    setFile(files[0])
    setFilename(files[0].name)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      const { data: { fileName, filePath } } = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => setPercentage(parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total)))
      })

      setUploadedFile({ fileName, filePath })

      setMessage('File uploaded')

    } catch ({ response }) {
      if (response.status === 500) return setMessage('There was a problem with a server ')

      setMessage(response.data.msg)

    }
  }

  return (
    <Fragment>
      {message && <Message msg={message} closeMessage={() => setMessage('')}/>}
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
          <label className="custom-file-label" htmlFor="customFile">{filename} </label>
        </div>
        <Progress percentage={uploadPercentage}/>
        <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
      </form>

      {uploadedFile && <div className="row mt-5">

        <div className="col-md-6 m-auto">
          <h3 className="text-center"> {uploadedFile.fileName}</h3>
          <img style={{ width: '100%' }} src={uploadedFile.filePath} alt=""/>
        </div>

      </div>}


    </Fragment>
  )
}

export default FileUpload