

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

//sign up function

let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) => {
  //prevent default from submission bahaviour
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
  .createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential)=> {
    location.reload();
    alert("user signed up successful");

    //signed in

    var user = userCredential.user;
    console.log("user, user.email");
  })

  .catch((error)=> {
    var errorCode = error.code;

    var errorMessage = error.message;
    console.log("error code", errorCode);
    console.log("error Message", errorMessage);
    alert(errorMessage);
  });
});

//SIGN IN FUNCTION


let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sign in clicked");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  
  auth
  .signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      window.location = "landingpage.html";

})

.catch((error)=> {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});

});





































































































































