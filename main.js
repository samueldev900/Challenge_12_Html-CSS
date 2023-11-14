interacao = document.getElementById("idinteraction");
interacao2 = document.getElementById("idinteraction2");
block = document.getElementById("principal")
btnShare =document.getElementById("btn-compartilhar")

function bntInterativo(){

if (window.innerWidth < 1000) {

    if(interacao2.style.transform === 'scale(0)'){
        interacao.style.transform = 'scale(0)';
        interacao2.style.transform = 'scale(1)';
    }
    else{
        interacao.style.transform = 'scale(1)';
        interacao2.style.transform = 'scale(0)';
    }    

} 
else{

    if (btnShare.style.transform === 'scale(0)') {
        btnShare.style.transform = 'scale(1)';
    }
    else{
        btnShare.style.transform = 'scale(0)';
    }
}
}
