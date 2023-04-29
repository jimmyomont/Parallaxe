let mario = document.getElementById('mario');
let solHaut = document.getElementById('solHaut');
let solBas = document.getElementById('solBas');
let paysage = document.getElementById('paysage');
// let ciel = document.getElementById('body');
let ciel = document.querySelector('body')
let decalage = 0 ;

window.onload = () => {
    document.addEventListener("keydown", marcher);
    document.addEventListener("keyup", stopper);
}

function marcher(event){
    switch (event.key){
        case "ArrowLeft":
            parallaxe();
            mario.classList.add('marioGauche');
            mario.classList.remove('marioDroite');
            decalage ++;
            break;
        case "ArrowRight":
            parallaxe();
            mario.classList.add('marioDroite');
            mario.classList.remove('marioGauche');
            decalage --;
            break;
    }
}

function stopper(event){
    mario.classList.remove("marioGauche");
    mario.classList.remove("marioDroite");
}

function parallaxe() {
            solBas.style.backgroundPositionX = (decalage * 4) + "px";
            solHaut.style.backgroundPositionX = (decalage * 3) + "px";
            paysage.style.backgroundPositionX = (decalage * 2) + "px";
            ciel.style.backgroundPositionX = decalage + "px";
};