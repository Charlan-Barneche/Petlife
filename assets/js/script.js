let seta = document.getElementById ("seta");
let entry = document.getElementById ("entry");
seta.addEventListener ("click", click);

let initialScreen = document.getElementById ("initial-screen");

function click (click) {
    initialScreen.classList = ('initial-screen scroll-scren hidden-screen');
    entry.classList = ('btn btn-cor btn-move')
}


