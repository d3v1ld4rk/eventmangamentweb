function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
    document.getElementById("main").backgroundColor = "rgba(0,0,0,1)";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").backgroundColor = "white";
}

function closefirstview() {
    document.getElementById("first_view").style.display = "none";
    document.getElementById("first_view_con").style.display = "none";
}