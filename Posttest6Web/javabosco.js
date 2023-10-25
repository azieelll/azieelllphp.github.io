var bodyElement = document.getElementById('_body');

let body = document.getElementById("body");
const icon = document.getElementById("icon");

function toggleDark() {
    body.classList.toggle("darkMode")
    if (body.classList.contains("darkMode")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }

    
}

icon.addEventListener('click', function () {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        icon.src = 'sun.png';
    } else {
        icon.src = 'moon.png'
    }
});