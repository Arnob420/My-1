function my () {
    var imgs = document.querySelector("#lig");
    var te = document.querySelector("#h");
    if (imgs.src.match("on")) {
            imgs.src = "of.png";
            te.innerHTML = "Light Is OFF!!"
            te.style.color = "red";
        } else {
            imgs.src = "on.jpg";
            te.innerHTML = "Light Is ONN!!"
            te.style.color = "green";
        }
    }
