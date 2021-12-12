window.onplay = draw();

function draw() {
    var canvas = document.getElementById("canvas");

    canvas.width = 1600;
    canvas.height = 1600;

    if (canvas.getContext) {
        var square = canvas.getContext("2d");
    }

    square.fillStyle = "rgb(255,127,0)";
    square.fillRect(0, 0, 100, 100);
}