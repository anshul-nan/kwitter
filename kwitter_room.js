
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCMhH7jeWJJn7gIuy-b7U-M1a-2PYhY_qI",
      authDomain: "kwitter-a6674.firebaseapp.com",
      databaseURL: "https://kwitter-a6674-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6674",
      storageBucket: "kwitter-a6674.appspot.com",
      messagingSenderId: "728672883283",
      appId: "1:728672883283:web:9eca423a38a42b1c74aca6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id')>#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

username=localStorage.getItem("Username");

document.getElementById("user_name").innerHTML="Welcome "+username+ " !";

function addRoom()
{
      room_name=document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"      });
            localStorage.setItem("room_name",room_name);

            window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name",name);
     window.localStorage="kwitter_page.html"; 
}


function logout()
{
      localStorage.removeItem("Usernames");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

