function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id =  message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}



function logout()  {
    localStorage.removeItem("user_");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}