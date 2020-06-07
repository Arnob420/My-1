var balls = document.getElementsByClassName("ball");

var count = 0;

document.onmousemove = function () {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    count++;
    console.log(count);
    for (var i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}
