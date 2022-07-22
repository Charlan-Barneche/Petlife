

let seta = document.getElementById("seta");
let entry = document.getElementById("entry");
seta.addEventListener("click", click);

let initialScreen = document.getElementById("initial-screen");

function click(click) {
    initialScreen.classList = ('initial-screen scroll-scren hidden-screen');
    entry.classList = ('btn btn-cor btn-move')
}


const ITEM = document.querySelectorAll("[data-anime]");

const ANIME_SCROLL = () => {
    const WINDOW_TOP = window.pageYOffset * window.innerHeight * 0.10;
    console.log (WINDOW_TOP)

    ITEM.forEach(element => {
        if (WINDOW_TOP > element.offsetTop) {
            element.classList.add('scroll-scren' ,'hidden-screen');
        }
    })
}


window.addEventListener("scroll", () => {
    ANIME_SCROLL();
})

