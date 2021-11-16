function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("fui clicado");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

function merceariaSalgada(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("mercearia1")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function merceariaDoce(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("mercearia2")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function hortifruti(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("horti")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function bebidas(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("bebes")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function frios(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("frio")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function higiene(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("hige")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function limpeza(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("limpe")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}

function variados(){
    var produtos = document.querySelectorAll(".item");
    
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i]; 

        if (produto.classList.contains("varia")) {
            produto.classList.remove("invisivel");
        } else {
            produto.classList.add("invisivel");
        }
    } 
}







