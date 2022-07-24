const RETURN = document.getElementById ("return");


RETURN.addEventListener("click" , clickreturn)

    function clickreturn (clickreturn){
            console.log('retornar')
            const LOGIN = document.getElementById ("box-login");
            const INPUTS_LOGIN = document.getElementById ("inpus-login");
            const REDES_SOCIAIS = document.getElementById ("redes-sociais");
            const BTN_IMGS = document.getElementById("buttons-imgs");
            const REGISTER_ENTRY = document.getElementById ("register-entry");
            INPUTS_LOGIN.classList = ("inputs opacity100-0");
            REDES_SOCIAIS.classList = ("redes-sociais opacity100-0");

            
            setTimeout(function logindown () {
                REGISTER_ENTRY.classList = ("btns-register-entry position-fixed movedown");
                LOGIN.classList = ("box-login-visible position-relative");
                BTN_IMGS.classList = ("buttons-imgs opacity0-100");

            },750)       
            
            

        }

