// animation click initial screen

const SETA = document.getElementById("seta");
const ENTRY = document.getElementById("entry");
SETA.addEventListener("click", click);

let initialScreen = document.getElementById("initial-screen");

function click(click) {
    initialScreen.classList = ('initial-screen scroll-scren hidden-screen');
    ENTRY.classList = ('btn btn-cor btn-move')
}

// fim animation click initial screen

// animation scroll

const ITEM = document.querySelectorAll("[data-anime]");

const ANIME_SCROLL = () => {
    const WINDOW_TOP = window.pageYOffset * window.innerHeight * 0.10;
    //console.log (WINDOW_TOP)

    ITEM.forEach(element => {
        if (WINDOW_TOP > element.offsetTop) {
            element.classList.add('scroll-scren' ,'hidden-screen');
        }
    })
}


window.addEventListener("scroll", () => {
    ANIME_SCROLL();
})

// fim animation scroll
