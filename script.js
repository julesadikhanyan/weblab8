document.getElementById('applicationButton').onclick = function () {
    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value = "";
}

window.onscroll = function() {
    let scrolled = window.pageYOffset;
    if (scrolled > 100) {
        document.getElementById('up-button').style.display = 'block';
    } else {
        document.getElementById('up-button').style.display = 'none';
    }
}

