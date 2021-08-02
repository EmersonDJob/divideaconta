let btnPessoa = document.getElementById("btn-pessoa")
let inputNome = document.getElementById("input-nome")
let divPessoas = document.getElementById("div-pessoa")
let divClientes = document.getElementById("clientes")

btnPessoa.addEventListener('click', () => {
    if(inputNome.value != "") {
    let pessoa = document.createElement('li')
   
    pessoa.innerText = inputNome.value
    divPessoas.appendChild(pessoa)
    pessoa.setAttribute("id", inputNome.value.trim())
    pessoa.classList.add("class-pessoa")

    let h1 = document.createElement("h1")
   h1.innerText = inputNome.value
    divClientes.appendChild(h1)

    criarSelect(pessoa)
    
    
    event.preventDefault();
}}
)
function criarSelect(pessoa) {
   // let consumo = document.createElement('select')
   for (const key in listProdutos) {      
    
      
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.value = `${listProdutos[key].preco}`
        checkbox.id =`${listProdutos[key].produto}${[key]}`
        checkbox.classList.add("checkbox")

        var labels = document.createElement('label')
        labels.id =`${listProdutos[key].produto}`
        labels.htmlFor = `${listProdutos[key].produto}${[key]}`
        labels.appendChild(document.createTextNode(`${listProdutos[key].produto}`))
        labels.classList.add("labels") 

        divPessoas.appendChild(checkbox)  
        divPessoas.appendChild(labels)    
       
    } 
    for (const key in listProdutos) {
        let chek = document.getElementById(`${listProdutos[key].produto}${[key]}`)
        let lab = document.getElementById(`${listProdutos[key].produto}`)
        if(chek.checkbox) {
            lab.style.background = "red"
             }else {
                lab.style.background = "white"
             }

    }
}

/////////////////////////////////////////////////
let btnProdutos = document.getElementById("btn-produtos")
let divProdutos = document.getElementById("lista-produtos")
let inputProdutos = document.getElementById("input-produtos")
let inputPrecos = document.getElementById("input-precos")

btnProdutos.addEventListener('click', ()=> {
    
    let produtos = document.createElement('h3')
    let precos = document.createElement('h3')

    produtos.classList.add("h3Produtos")
    precos.classList.add("h3Precos")

    produtos.innerText = inputProdutos.value
    precos.innerText = inputPrecos.value

    divProdutos.appendChild(produtos)
    divProdutos.appendChild(precos)

    produtos.setAttribute("id", inputProdutos.value)
    precos.setAttribute("id", inputPrecos.value)

    inputProdutos.value = ''
    inputPrecos.value = ''

    produtos.addEventListener('click', ()=>{
        produtos.style.textDecoration = "line-through"
    })
    precos.addEventListener('click', ()=>{
        precos.style.textDecoration = "line-through"
    })

    produtos.addEventListener('dblclick', ()=>{
        divProdutos.removeChild(precos)
        divProdutos.removeChild(produtos)
    })
    precos.addEventListener('dblclick', ()=>{
        divProdutos.removeChild(produtos)
        divProdutos.removeChild(precos)
     })    
     
     let pro = produtos.textContent
    let pre  =precos.textContent

     bdProdutos(pro,pre)
     event.preventDefault();
    })

    var varProdutos = {}
    var listProdutos =[]

    function bdProdutos(pro,pre) {
        
          varProdutos = {
              produto : pro,
              preco: pre
          }
           return listProdutos.push(varProdutos)          
       
          //localStorage.setItem('index',JSON.stringify(listProdutos))
    }




    function calculo() {
        for (const key in listProdutos) {
            console.log("Produtos"+ listProdutos[key].preco)
            //console.log(listProdutos.preco)
        }
    }
    