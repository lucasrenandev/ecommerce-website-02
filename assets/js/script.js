const scrollButton = document.querySelector(".scroll-button")
const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar ul")
const dataClick = document.querySelectorAll("[data-click]")

scrollButton.addEventListener("click", function(event) {
    event.preventDefault()

    window.scrollTo(0, 0)
})

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

const hideScrollButton = function() {
    if(window.scrollY > 500) {
        scrollButton.style.display = "inline-flex"
    }
    else {
        scrollButton.style.display = "none"
    }
}
window.addEventListener("scroll", hideScrollButton)
hideScrollButton()

dataClick.forEach(data => {
    data.addEventListener("click", function(event) {
        event.preventDefault()
    })
})