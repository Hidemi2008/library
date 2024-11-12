let library = ["The good father ", "Harry Potter ", "Screen ", "The good Fellas "]
let block = document.querySelector("#block")
let block_input = document.querySelector("#block-input")
let adictionaryBook = document.querySelector("#newBook")


function addBlock(){
    for(let i = 0; i < library.length; i++){
        let blockContent = document.createElement("div")
        blockContent.style.color = "white";
        blockContent.style.backgroundColor = "blue";
        blockContent.innerHTML += library[i]
        block.appendChild(blockContent)
    }
}
let n = 0
function newBook(){

    //Adicionar os elementos ao HTML
    let label1 = document.createElement("label")
    let inputA = document.createElement("input");
    inputA.setAttribute("id", "Author")
    label1.setAttribute("for", "Author")
    label1.textContent = "Author"
    let label2 = document.createElement("label")
    let inputT = document.createElement("input")
    inputT.setAttribute("id", "Title")
    label2.setAttribute("for", "Title")
    label2.textContent = "Title"
    let label3 = document.createElement("label")
    let inputN = document.createElement("input")
    inputN.setAttribute("id","Pages")
    label3.setAttribute("for", "Pages")
    inputN.setAttribute("type", "number")
    label3.textContent = "Num of Pages"
    let inputR1 = document.createElement("input")
    let inputR2 = document.createElement("input")
    inputR1.setAttribute("type","radio")
    inputR1.setAttribute("id","choose1")
    inputR1.setAttribute("name","choose")
    inputR2.setAttribute("type","radio")
    inputR2.setAttribute("id","choose2")
    inputR2.setAttribute("name","choose")
    let label4 = document.createElement("label")
    let label5 = document.createElement("label")
    label4.setAttribute("for", "choose1")
    label5.setAttribute("for", "choose2")
    label4.textContent = "YES"
    label5.textContent = "NOT"

    block_input.appendChild(label1)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputA,)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(label2)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputT)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(label3)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputN)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(label4)
    block_input.appendChild(inputR1)
    block_input.appendChild(label5)
    block_input.appendChild(inputR2)

    if(n > 0){
        block_input.innerHTML = ""
        return n = 0
    }

    if(n === 0){
        return n = 1
    }

}

    //Pegar os valores do HTML

function book(){

    let athor = document.querySelector("#Author")
    let title = document.querySelector("#Title")
    let num = document.querySelector("#Pages")
    let read1 = document.querySelector("#Author1")
    let read2 = document.querySelector("#Author2")

    library.push(title)
    console.log(library)
}

function addBookToLibrary(){

}