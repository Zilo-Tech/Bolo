var clicked = false;

function follow() {
    let following;
    if(clicked) {
        following = "Follow ";
        document.getElementById("follow").style.backgroundColor = "white";
        document.getElementById('follow').style.color = "#2675e1";
    }  
    else{
        following = "Following";
        document.getElementById("follow").style.backgroundColor = "#2675e1";
        document.getElementById('follow').style.color = "white";
    }
    clicked = !clicked
    document.getElementById("following").innerHTML = following;
}

document.getElementById()