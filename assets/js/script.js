const scrollButton = document.querySelector(".scroll-button")
const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar ul")
const navLink = document.querySelectorAll("[data-link]")

scrollButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.scrollTo(0, 0)
})

navLink.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault()
    })
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