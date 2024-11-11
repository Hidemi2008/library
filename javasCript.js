let library = ["The good father ", "Harry Potter ", "Screen ", "The good Fellas "]
let block = document.querySelector("#block")
let block_input = document.querySelector("#block-input")



function addBlock(){
    for(let i = 0; i < library.length; i++){
        let blockContent = document.createElement("div")
        blockContent.style.color = "white";
        blockContent.style.backgroundColor = "blue";
        blockContent.innerHTML += library[i]
        block.appendChild(blockContent)
    }
}

function newBook(){
    let inputA = document.createElement("input")
    let inputT = document.createElement("input")
    let inputN = document.createElement("input")
    let inputR = document.createElement("input")

    block_input.appendChild(inputA,)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputT)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputN)
    block_input.appendChild(document.createElement("br"))
    block_input.appendChild(inputR)
}

function book(){

}

function addBookToLibrary(){

}