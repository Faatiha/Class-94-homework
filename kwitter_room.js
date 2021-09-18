// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD3IBKk8C9EUURxaM1fuXLL_s_hgGcgcTY",
      authDomain: "kwitter-homework-9e83c.firebaseapp.com",
      projectId: "kwitter-homework-9e83c",
      storageBucket: "kwitter-homework-9e83c.appspot.com",
      messagingSenderId: "391787482038",
      appId: "1:391787482038:web:f044f50e62a952aabbcf17"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
