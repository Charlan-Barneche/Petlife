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
    });

// fim animation scroll

// click btn entrar e tela de login


     ENTRY.addEventListener ("click", clickentry);
      function clickentry (){
            console.log('entrar')
            const LOGIN = document.getElementById ("box-login");
            const INPUTS_LOGIN = document.getElementById ("inpus-login");
            const REDES_SOCIAIS = document.getElementById ("redes-sociais");
            const BTN_IMGS = document.getElementById("buttons-imgs");
            LOGIN.classList = ("box-login-visible .position-fixed opacity0");


            setTimeout(function loginhidden () {
                REGISTER_ENTRY.classList = ("btns-register-entry position-relative up");
            },100)

            setTimeout(function loginVisible () {
                LOGIN.classList = ("box-login-visible .position-fixed up opacity0");
            },150)


            setTimeout (function animinputs (){
                LOGIN.classList = ("box-login-visible .position-fixed up opacity0-100");
                INPUTS_LOGIN.classList = ("inputs opacity0-100");
                REDES_SOCIAIS.classList = ("redes-sociais opacity0-100");
                REGISTER_ENTRY.classList = ("btns-register-entry position-relative up opacity100-0");
            },1000)
            

            

      }

// click btn entrar e tela de login







