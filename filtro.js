var campoFiltro = document.querySelector("#filtrar-produtos");

campoFiltro.addEventListener("input", function(){
   var produtos = document.querySelectorAll(".nome");

   if (this.value.length > 0) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i]; 
            var nomeProduto = produto.textContent;

            var expressao = new RegExp("("+this.value+")", "i");

            if (expressao.test(nomeProduto)) {
                produto.parentElement.classList.remove("invisivel");
            } else {
                produto.parentElement.classList.add("invisivel");
            }    
        }
    } else {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            produto.classList.remove("invisivel");
        }
    }
});

