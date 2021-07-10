var firebaseConfig = {
    apiKey: "AIzaSyAt5n9-mTztCuNM9TkUIHEyBDAsLZ9N290",
    authDomain: "class-test-18b55.firebaseapp.com",
    databaseURL: "https://class-test-18b55-default-rtdb.firebaseio.com",
    projectId: "class-test-18b55",
    storageBucket: "class-test-18b55.appspot.com",
    messagingSenderId: "155193969809",
    appId: "1:155193969809:web:dcebeda24de15a9e8b4330"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}