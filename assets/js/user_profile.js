var clicked = 0;

function follow() {
    let following;
    if(clicked%2 === 1) {
        following = "Follow ";
        document.getElementById("follow").style.backgroundColor = "white";
        document.getElementById('follow').style.color = "#2675e1";
    }  
    else{
        following = "Following";
        document.getElementById("follow").style.backgroundColor = "#2675e1";
        document.getElementById('follow').style.color = "white";
    }
    clicked = clicked + 1;
    document.getElementById("follow").innerHTML = following;
}

document.getElementById()