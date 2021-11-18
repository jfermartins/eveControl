// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAyIoGNwviaHvJhwr0U5fw5sQ1xJjCK63Q",
    authDomain: "evecon-3ab3d.firebaseapp.com",
    databaseURL: "https://evecon-3ab3d-default-rtdb.firebaseio.com",
    projectId: "evecon-3ab3d",
    storageBucket: "evecon-3ab3d.appspot.com",
    messagingSenderId: "1058126570658",
    appId: "1:1058126570658:web:fadc4c315726eddcbae3fb",
    measurementId: "G-8SV096XN8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    $(window.document.location).attr('href', 'http://127.0.0.1:5500/examples/dashboard.html');
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    window.location.href='http://127.0.0.1:5500/examples/dashboard.html';
  }


  //signOut

  function signOut(){
    auth.signOut();
    window.location.href='http://127.0.0.1:5500/examples/login.html';
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
    }
  })