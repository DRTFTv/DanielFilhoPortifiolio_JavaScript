window.onload = Show;
window.onresize = Show;
document.getElementById("scrollBox").onscroll = Show;

function Show() {
    console.log("Show");
    let scrollBox = document.getElementById("scrollBox");
    let v = parseInt(100 * scrollBox.scrollTop / (scrollBox.scrollHeight - scrollBox.clientHeight));

    let title = document.getElementById("title");
    let content1 = document.getElementById("content1");
    let content2 = document.getElementById("content2");
    let center = document.getElementById("center");

    let x = [title];
    let y = [center, content1, content2];

    if (window.innerWidth > 1025) {
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
    } else {
        if (v > 75) {
            x[0].style.display = "none";
            y[0].style.display = "flex";
        } else {
            x[0].style.display = "flex";
            y[0].style.display = "none";
        }
    }
}