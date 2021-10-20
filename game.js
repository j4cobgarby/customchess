var socket;

function init() {
    socket = new WebSocket("ws://127.0.0.1:13254");
    socket.onopen = function(e) {
        console.log("Websocket succesfully connected");
    }

    for (let r = 0; r < 8; r++) {
        var row = document.createElement("tr");

        for (let c = 0; c < 8; c++) {
            var el = document.createElement("td");
            el.onmousedown = function() {setTileImg(this, "assets/pl.svg");};
            row.appendChild(el);
        }

        document.getElementById("board").appendChild(row);
    }
}

function setTileImg(el, piece) {
    var im = document.createElement("img");
    im.src = piece;
    el.appendChild(im);
}

function clearTileImg(el) {
    el.innerHTML = "";
}

function updateUsername() {
    let data = "uu:"+document.getElementById("username").value;
    socket.send(data);
}