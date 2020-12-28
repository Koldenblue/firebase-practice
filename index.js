// firebase tutorial vid:
// https://firebase.google.com/docs/storage/web/start?authuser=0

console.log('running')

let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('filebutton');

fileButton.addEventListener('change', function(event) {
  let file = event.target.files[0];

  // store in firebase storage, in folder, as a file
  firebase.storage().ref('folder_name/' + file.name);

  // next upload file to firebase storage
  let task = storageRef.put(file);

  // task has various information on file storage
  task.on('state_changed',
  
    function progress(snapshot) {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },

    function error(err) {

    },

    function complete() {

    }
  )
})