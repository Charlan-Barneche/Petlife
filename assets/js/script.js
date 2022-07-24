// animation click initial screen

    const SETA = document.getElementById("seta");
    const ENTRY = document.getElementById("entry");
    const REGISTER_ENTRY = document.getElementById ("register-entry");
    SETA.addEventListener("click", click);

    let initialScreen = document.getElementById("initial-screen");

    function click(click) {
        initialScreen.classList = ('initial-screen scroll-scren hidden');
        REGISTER_ENTRY.classList.add("up");

        ENTRY.classList = ('btn btn-move-cor')

    }

    // fim animation click initial screen

    // animation scroll

    const ITEM = document.querySelectorAll("[data-anime]");

    const ANIME_SCROLL = () => {
        const WINDOW_TOP = window.pageYOffset * window.innerHeight * 0.10;
        // console.log (WINDOW_TOP)

        ITEM.forEach(element => {
            if (WINDOW_TOP > element.offsetTop) {
                element.classList.add('scroll-scren' ,'hidden');
                REGISTER_ENTRY.classList.add("up");


                
            }
        })
    }


    window.addEventListener("scroll", () => {
        ANIME_SCROLL();
    })

// fim animation scroll

// click btn entrar e tela de login


