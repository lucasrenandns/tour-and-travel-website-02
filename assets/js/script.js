const header = document.getElementById("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
})