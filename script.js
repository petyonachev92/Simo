function press() {
    let btn = document.getElementsByClassName('btn');
    let img = document.getElementsByClassName('girl');
    img[0].hidden = true;

    btn[0].addEventListener("click", function() {
        if(img[0].hidden) {
            img[0].hidden = false;
        } else {
            img[0].hidden = true;
        }
    })
}

press()