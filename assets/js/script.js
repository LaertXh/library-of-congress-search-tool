
var search = {
    keywords: ,
    type: }

subEnd.addEventListener('click', function () {
window.location.replace("results.html")
window.localStorage.setItem("currentsearch", JSON.stringify(search))}

mvp = JSON.parse(window.localStorage.getItem('currentsearch'))