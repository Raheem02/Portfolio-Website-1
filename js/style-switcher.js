/* ========= toggle style ===========*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ============================ theme colors =================== */
const alternatestyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ============================ theme light and dark mode =================== */
const dayNighht = document.querySelector(".day-night");
dayNighht.addEventListener("click", () => {
    dayNighht.querySelector("i").classList.toggle("fa-sun");
    dayNighht.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNighht.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNighht.querySelector("i").classList.add("fa-moon");
    }
})