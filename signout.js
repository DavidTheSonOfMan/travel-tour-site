
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDqElYn8SHO1CS3-ocT1_ieiqgwRfr2D7w",
    authDomain: "c3-authentication.firebaseapp.com",
    projectId: "c3-authentication",
    storageBucket: "c3-authentication.appspot.com",
    messagingSenderId: "547036415946",
    appId: "1:547036415946:web:ef487d23b92c9aba2ab133"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  auth.onAuthStateChanged(function(user){
    if (user) {
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
         //is signed in
    }
    else{
        alert("user not authenticated, kindly login or signup");
        window.location="index.html";
    }
   


  });


//logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener('click', (e) => {
e.preventDefault();
console.log("logout clicked");
auth.signOut();
alert("singed out");
window.location = "index.html";
});
























































