// vai precisar que o usuário digite um número e este número será a palavra

// escurecer os forms que não forem usados devido a quantidade de letras

// Altere a propriedade CSS com getElementById em JavaScript
// Se tivermos um id único atribuído a um elemento HTML, podemos consultá-lo e alterar seu estilo com a função getElementById() da interface Document. É o método mais usado por desenvolvedores da web. Na maioria das vezes, os ids atribuídos a um div serão mantidos exclusivos para que, durante a execução da função getElementById(), outros elementos HTML não sejam selecionados. A sintaxe para getElementById() é conforme ilustrado abaixo.

// document.getElementById("parent-1"));
// Como selecionamos um elemento único, neste caso, as mudanças de estilo são fáceis de fazer. Os códigos a seguir descrevem os caminhos. É semelhante aos mencionados anteriormente, com a diferença de como consultamos um elemento. Aqui, identificamos exclusivamente os nós HTML com o ID do elemento.
//   como mudar um elemento css pelo css  document.getElementById("letra1").style.backgroundColor = "red";

//Adicionar pistas das palavras

let palavra = ``

function startButton() {// essa fuction vai inserir as letras dentro dos inputs e deixálas com a mesma cor do fundo
      document.getElementById("letra1").style.color = "rgb(80, 172, 172)";
      document.getElementById("letra2").style.color = "rgb(80, 172, 172)";
      document.getElementById("letra3").style.color = "rgb(80, 172, 172)";
      document.getElementById("letra4").style.color = "rgb(80, 172, 172)";
      document.getElementById("letra5").style.color = "rgb(80, 172, 172)";
      let numeroSorteio

      let numeroInicial = document.getElementById("numeroSorteio")

      numeroSorteio = Number(numeroInicial.value)

      if (numeroSorteio == 1) {//codar
            document.getElementById("letra1").value = `c`;
            document.getElementById("letra2").value = `o`;
            document.getElementById("letra3").value = `d`;
            document.getElementById("letra4").value = `a`;
            document.getElementById("letra5").value = `r`;
      }
      if (numeroSorteio == 2) {//caixa
            document.getElementById("letra1").value = `c`;
            document.getElementById("letra2").value = `a`;
            document.getElementById("letra3").value = `i`;
            document.getElementById("letra4").value = `x`;
            document.getElementById("letra5").value = `a`;
      }
      if (numeroSorteio == 3) {//foice
            document.getElementById("letra1").value = `f`;
            document.getElementById("letra2").value = `o`;
            document.getElementById("letra3").value = `i`;
            document.getElementById("letra4").value = `c`;
            document.getElementById("letra5").value = `e`;
      }
      if (numeroSorteio == 4) {//jonas
            document.getElementById("letra1").value = `j`;
            document.getElementById("letra2").value = `o`;
            document.getElementById("letra3").value = `n`;
            document.getElementById("letra4").value = `a`;
            document.getElementById("letra5").value = `s`;
      }
      if (numeroSorteio == 5) {//perna
            document.getElementById("letra1").value = `p`;
            document.getElementById("letra2").value = `e`;
            document.getElementById("letra3").value = `r`;
            document.getElementById("letra4").value = `n`;
            document.getElementById("letra5").value = `a`;
      }
}


function tentar() {
      l1 = document.getElementById("letra1").value
      l2 = document.getElementById("letra2").value
      l3 = document.getElementById("letra3").value
      l4 = document.getElementById("letra4").value
      l5 = document.getElementById("letra5").value

      

      let tentativa = document.getElementById("chute").value

      if (tentativa == l1) {
            document.getElementById("letra1").style.color = "rgb(0, 0, 0)";
            
      }

      if (tentativa == l2) {
            document.getElementById("letra2").style.color = "rgb(0, 0, 0)";
            
      }

      if (tentativa == l3) {
            document.getElementById("letra3").style.color = "rgb(0, 0, 0)";
            
      }

      if (tentativa == l4) {
            document.getElementById("letra4").style.color = "rgb(0, 0, 0)";
            
      }

      if (tentativa == l5) {
            document.getElementById("letra5").style.color = "rgb(0, 0, 0)";
      }
      

}