function press() {
    let btn = document.getElementsByClassName('btn');
    let img = document.getElementsByClassName('girl');
    let txt = document.getElementsByClassName('text');
    img[0].hidden = true;
    
    txt[0].hidden = true;

    btn[0].addEventListener("click", function() {
        if(img[0].hidden) {
            img[0].hidden = false;
            txt[0].hidden = false;
        } else {
            img[0].hidden = true;
            txt[0].hidden = true;
        }
    })
}

press()