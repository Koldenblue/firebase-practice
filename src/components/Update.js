import React from 'react';

export default function Update({ db }) {


  const addDoc = () => {
    // the set function will either create or overwrite the doc with the given name
    db.collection('tweets').doc('userId-1').set({
      tweet: "this is a tweet",
      likes: 9
    }).then(() => {
      console.log(`doc successfully written`)
    }).catch(err => console.error(err))
  }

  const updateDoc = () => {
    db.collection('tweets').doc('userId-1').set({
      updated: 'now this doc is updated'
    }, {merge: true})
  }

  return (
    <div className='grey-bg'>
      <button onClick={addDoc}>set doc</button>

      <button onClick={updateDoc}>update the doc</button>
    </div>)
}