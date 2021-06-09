
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

function open_bday() {
    var x = document.getElementById("bday_img");
    var za = document.getElementById("b_icn_a");
    var zm = document.getElementById("b_icn_m");
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    if(zm.style.display === "block"){
        za.style.display = "block";
        zm.style.display = "none";
    }else {
        za.style.display = "none";
        zm.style.display = "block";
    }

}

function open_surp() {
    var a = document.getElementById("surp_img");
    var spa = document.getElementById("sp_icn_a");
    var spm = document.getElementById("sp_icn_m");
    if (a.style.display === "block"){
        a.style.display = "none";
    }
    else{
        a.style.display = "block";
    }
    if(spm.style.display === "block"){
        spa.style.display = "block";
        spm.style.display = "none";
    }else {
        spa.style.display = "none";
        spm.style.display = "block";
    }

}

function open_sm() {
    var b = document.getElementById("sm_img");
    var sma = document.getElementById("sm_icn_a");
    var smm = document.getElementById("sm_icn_m");
    if (b.style.display === "block"){
        b.style.display = "none";
    }
    else{
        b.style.display = "block";
    }
    if(smm.style.display === "block"){
        sma.style.display = "block";
        smm.style.display = "none";
    }else {
        sma.style.display = "none";
        smm.style.display = "block";
    }

}

function open_anni() {
    var c = document.getElementById("anni_img");
    var aa = document.getElementById("a_icn_a");
    var am = document.getElementById("a_icn_m");
    if (c.style.display === "block"){
        c.style.display = "none";
    }
    else{
        c.style.display = "block";
    }
    if(am.style.display === "block"){
        aa.style.display = "block";
        am.style.display = "none";
    }else {
        aa.style.display = "none";
        am.style.display = "block";
    }

}

function open_bshoot() {
    var d = document.getElementById("bshoot_img");
    var bsa = document.getElementById("bs_icn_a");
    var bsm = document.getElementById("bs_icn_m");
    if (d.style.display === "block"){
        d.style.display = "none";
    }
    else{
        d.style.display = "block";
    }
    if(bsm.style.display === "block"){
        bsa.style.display = "block";
        bsm.style.display = "none";
    }else {
        bsa.style.display = "none";
        bsm.style.display = "block";
    }
}