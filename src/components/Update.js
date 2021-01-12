import React from 'react';

export default function Update({ db }) {


  const addDoc = () => {
    // the set function will either create or overwrite the doc with the given name
    // set() is the same as add() except that add auto-generates an id, which can then be retrieved in .then(docRef.id)
    db.collection('tweets').doc('userId-1').set({
      tweet: "this is a tweet",
      likes: 9,
      favorites: { food: "Pizza", color: "Blue", subject: "recess" }
    }).then(() => {
      console.log(`doc successfully written`)
    }).catch(err => console.error(err))
  }

  /* the merge option will add to an existing document, rather than overwrite, if the doc already exists */
  const mergeDoc = () => {
    db.collection('tweets').doc('userId-1').set({
      updated: 'now this doc is updated',
      currentDate: Date.now()
    }, {merge: true}).then(() => {
      console.log('doc merged with new data');
    })
  }

  const updateDoc = () => {
    db.collection('tweets').doc('userId-1').update({
      updated: 'now the doc has been updated using .update(), instead of set() with merge=true',
      // the dot notation allows the update of a single nested field, rather then the entirity of the 'favorites' object
      'favorites.food': 'iceeee creeeaaam'
    })
  }


  // other possible operations include array unions and array element removal
  // auto-incrementation of numbers
  return (
    <div className='grey-bg'>
      <button onClick={addDoc}>set doc</button>

      <button onClick={mergeDoc}>merge the doc with new data</button>

      <button onClick={updateDoc}>update the doc</button>
    </div>)
}