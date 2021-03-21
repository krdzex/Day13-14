var modal = document.getElementById("myModal");


function btnNeki(clicked_id) {
    var btn;
    btn = document.getElementById(clicked_id);
    modal.style.display = "block";
    console.log(btn);
    document.getElementById("modal-content").innerHTML = "<iframe class = 'descriptor' src='" + clicked_id + ".html'></iframe>"

}


var span = document.getElementsByClassName("close")[0];





span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
