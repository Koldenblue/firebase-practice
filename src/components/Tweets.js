import React, { useEffect } from 'react';

export default function Tweets(props) {

  useEffect(() => {
    console.log(props.db)
    if (props.db !== undefined) {
      props.db.collection('tweets').add({
        id: 'author id goes here',
        date: 'date of the tweet for stats purposes',
        text: "this is a tweet",
        likesArr: [{time: 'Jan 5 1pm', likes: 5}, {date: 'Jan 5 2pm', likes: 10}],
        followerCountArr:  [{time: 'Jan 5 1pm', followers: 5}, {date: 'Jan 5 2pm', followers: 10}],
        retweets: 0
      }).then(function(docRef) {
        // hmm this isn't the doc id showing
        console.log('document written with id: ', docRef);
        console.log(docRef.id)
      }).catch(function(err) {
        console.error('error adding doc', err)
      })
    }

    // also have to be able to update the likes array
  }, [])

  console.log(props.db)

  const getCollection = () => {
    props.db.collection('tweets').get().then(querySnapshot => {
      console.log(querySnapshot)
      querySnapshot.forEach(doc => {
        console.log(doc)
        console.log(doc.id)
        console.log(doc.data())
      })
    })
  }

  return (<div className='dark-bg'>
    <button onClick={getCollection}>get firestore collection</button>
  </div>)
}