const hamburger_button = document.querySelector("#hamburger_button")
const navbar = document.querySelector("#navbar")
const navbarList = document.querySelector(".nav__links")
const body = document.querySelector("body")

navbarList.addEventListener("click", () => {
    if (navbar.classList.contains("navbar-phone")) {
        close()
    }
})

hamburger_button.addEventListener("click", (event) => {
    close()
})

const close = () => {
    body.classList.toggle("body-lock")

    const links = [...navbarList.getElementsByTagName("a")]

    navbar.classList.toggle("navbar-phone")

    links.forEach((elem) => {
        elem.classList.toggle("navbar-phone--item")
    })

    const ButtonSrc = hamburger_button.src

    hamburger_button.src = ButtonSrc.includes("/assets/images/ham-icon.svg")
        ? "/assets/images/x.svg"
        : "/assets/images/ham-icon.svg"
}

//bug fix when changing resolution with opened navbar
window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
        navbar.classList.remove("navbar-phone")
        const links = [...navbarList.getElementsByTagName("a")]

        links.forEach((elem) => {
            elem.classList.remove("navbar-phone--item")
        })
        if (!navbar.classList.contains("navbar-phone")) {
            hamburger_button.src = "/assets/images/ham-icon.svg"
        }
        body.classList.remove("body-lock")
    }
})
