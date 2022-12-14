const scrollButton = document.querySelector(".scroll-button")

scrollButton.addEventListener("click", function(event) {
    event.preventDefault()

    window.scrollTo(0, 0)
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