var typeOf = document.querySelector("")
var keyW = document.querySelector("")
var search = {
    keywords: keyW.value,
    type: typeOf.value }

subEnd.addEventListener('click', function () {
window.location.replace("results.html")
window.localStorage.setItem("search", JSON.stringify(search))})

var searchData = JSON.parse(window.localStorage.getItem('search'))