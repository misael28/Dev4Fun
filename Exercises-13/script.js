function questao2(texto){
    let verificar=texto.includes("desenvolvimento")
    if (verificar){
            alert('Sim')
        }
    else{
            alert('Não')
    }
}

function questao3(texto){
    let newText = texto.toLowerCase()
    alert(newText)
}

function questao4(texto){
    let newText=""
    let novo=""
    for(let item=0;item<texto.length;item++){
        novo = texto[item]
        if(novo=="."){
          newText+=""
        }else if(novo=="-"){
          newText+="" 
        }else{
          newText+=novo
        }
      }
      alert(newText)
}

function questao5(texto){
    let texto2 = texto.trim()
    let array=texto2.split(" ")
    let newArray=[]
    let texto3=""
        for(let i=0;i<array.length;i++){
        newArray.push(array[i].replace(array[i][0],array[i][0].toUpperCase()))
        }
        for(let i=0;i<newArray.length;i++){
        texto3 += newArray[i]+" " 
        }
    alert(texto3.trim())
}

function questao6(texto){
    const texto2 = texto.trim()
    const array=texto2.split(" ")
    let newArray=[]
    let texto3=""
        for(let i=array.length-1;i>=0;i--){
        newArray.push(array[i])
        }
        for(let i=0;i<newArray.length;i++){
        texto3 += newArray[i]+" " 
        }
    alert(texto3)
}

function questao7(texto){
    const texto2 = texto.trim()
    const array=texto2.split(" ")
    let newArray=[]
    let texto3=""
        for(let i=0;i<array.length;i++){
            if(array[i]==="muito"){
                newArray.push(array[i].toUpperCase())
            }else if(array[i]==="Muito,"){
                newArray.push(array[i].toUpperCase())
            }else{
                newArray.push(array[i])
            }
        }
        
        for(let i=0;i<newArray.length;i++){
        texto3 += newArray[i]+" " 
        }
    alert(texto3.trim())
}

function questao9(texto){
    let newText="";
    let novo="" ;

    for(let item=0;item<texto.length;item++){
        novo=texto[item]
        if(item===4){
            newText+="-"
        }else{
            newText+=novo
        }
    }
    alert(newText)
}


const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", ()=>{
    let entrada = input.value
    //questao2(entrada)
    //questao3(entrada)
    //questao4(entrada)
    //questao5(entrada)
    questao6(entrada)
    //questao7(entrada)
    //questao9(entrada)
})

//faltam a 8 e a 10