import React, { useEffect } from 'react';
import Uploader from './Uploader';
import Tweets from './Tweets'

export default function Loading({ loading, db }) {

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return loading ? (<h1>LOADING</h1>) :
    (
      <div className="App">
        {/* <Uploader db={db}/> */}
        <Tweets db={db} />
      </div>
    )
}