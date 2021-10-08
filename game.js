function init() {
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