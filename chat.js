// Your web app's Firebase configuration
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

roomname=localStorage.getItem("room_name");
username=localStorage.getItem("Username");

function send()
{
    msg = document.getElementById("msg").value;

    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    });

        document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey;
         message_data = childData;
          //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        
        name= message_data['name'];
        message = message_data['message'];

        like=message_data['like'];

        name_with_tag="<h4>"+name+"</h4>"
        
        message_with_tag="<h4 class='message_h4'>"+message+"</h4>";       
        
        like_button="<button class='btn btn-warning' id="+firebase_message_id+"value"+like+"onclick='updateLike(this.id)'>Likes:"+like+"</button>";

        row= name_with_tag+message_with_tag+like_button;

        document.getElementById("output").innerHTML+=row;
                //End code 


} }); }); } 

getData();

function updateLike(message_id)
{
    console.log("clicked on like button-"+message_id);

    button_id=message_id;
    
    likes=document.getElementById(button_id).value;

    updated_likes=Number(likes)+1;

    console.log(updated_likes);

    firebase.database().ref(roomname).child(message_id).update({
        like:updated_likes
    });
}

function logout()
{
      localStorage.removeItem("Usernames");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
