let sayi = 0;

const sayiElement = document.getElementById("count");

function guncelleSayi(){
    sayiElement.innerText = sayi;
}

function arttir(){
    sayi++;
    guncelleSayi();
}

function azalt(){
    if(sayi > 0){
        sayi--;
        guncelleSayi();
    }
}