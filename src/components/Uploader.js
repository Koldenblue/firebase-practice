import React, { useRef } from 'react';


export default function Uploader() {
  const fileRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    console.log(event.target.upload)
    console.log(event.currentTarget)
    console.log(fileRef.current.files[0].name)
    console.log(fileRef.current.files[0])

  }


  return (<>
    <div className='container'>
      <progress
        value='0'
        max='100'
        id='uploader'
      >
        0%
      </progress>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type='file' id='filebutton' name='upload' ref={fileRef} />
        <button type='submit'>submit file</button>
      </form>
    </div>
  </>)
}