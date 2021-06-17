
var firebaseConfig = {
      apiKey: "AIzaSyBA7SwFsk0pi0JU9IgXLMhLeiCCuLLM2Y4",
      authDomain: "kwitter-11b55.firebaseapp.com",
      databaseURL: "https://kwitter-11b55-default-rtdb.firebaseio.com",
      projectId: "kwitter-11b55",
      storageBucket: "kwitter-11b55.appspot.com",
      messagingSenderId: "133764330724",
      appId: "1:133764330724:web:ee74146f95e87ae96a28f1",
      measurementId: "G-ERMND5BT3L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log ("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' ># "+ Room_names + "</div><hr></hr>";
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
            name : user_name,
            message:msg
            like:0
      });
      document.getElementById("msg").value = "";
}
