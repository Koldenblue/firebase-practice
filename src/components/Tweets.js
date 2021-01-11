import React, { useEffect } from 'react';

export default function Tweets(props) {

  useEffect(() => {
    console.log(props.db)
    let x = Math.floor(Math.random() * 5) + 1
    if (props.db !== undefined) {
      props.db.collection('tweets').add({
        text: "this is a tweet",
        likes: x
      })
    }
  }, [])

  console.log(props.db)

  return (<div className='dark-bg'>

  </div>)
}