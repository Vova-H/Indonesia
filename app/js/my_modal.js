let modal = document.querySelector('#my_modal');


let btn = document.querySelector('.btn--book');


let span = document.querySelector('.my_close');




btn.onclick = function () {

    modal.style.display = "block";

}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}