const comidas = [
    {
        nome:"pizza",
        categoria:"salgado"
    },
    {
        nome:"X-bacon",
        categoria:"Fast food"
    },
    {
        nome:"Bolo",
        categoria:"Doce"
    }
]

const formulario = document.getElementById("formComida")
const campoNome = document.getElementById("nome")
const campocategoria = document.getElementById("categoria")
const corpoTabela = document.getElementById("corpoTabela")

function exibir(){
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < comidas.length; posicao++){

        const comida = comidas[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${comida.nome}</td>
                <td>${comida.categoria}</td>
            </tr>
       
        `
       
    }
}

exibir();

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const comida = {
        nome: campoNome.value,
        categoria: campocategoria.value
    }

    comidas.push(comida)

    exibir()

} )