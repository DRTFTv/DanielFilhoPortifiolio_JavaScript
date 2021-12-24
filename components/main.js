document.getElementById("scrollBox").onscroll = Show;

function Show() {
    let scrollBox = document.getElementById("scrollBox");
    let v = parseInt(100 * scrollBox.scrollTop / (scrollBox.scrollHeight - scrollBox.clientHeight));

    let title = document.getElementById("title");
    let center = document.getElementById("center");

    let x = [title];
    let y = [center];

    if (v > 75) {
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "flex";
        }
    } else {
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "flex";
        }

        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
}