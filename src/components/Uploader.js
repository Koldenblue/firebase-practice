import React from 'react';

export default function Uploader() {
  return (<>
  <div class='container'>
      <progress
        value='0'
        max='100'
        id='uploader'
      >
        0%
      </progress>

      <input type='file' id='filebutton' />
    </div>
  </>)
}