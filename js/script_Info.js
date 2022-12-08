function showInfo(){
    document.getElementById("info").classList.remove("d-none");
    document.getElementById("showInfo").classList.add("d-none");
    document.getElementById("hideInfo").classList.remove("d-none");
}
function hideInfo(){
    document.getElementById("info").classList.add("d-none");
    document.getElementById("showInfo").classList.remove("d-none");
    document.getElementById("hideInfo").classList.add("d-none");
}