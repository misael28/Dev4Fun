const helpers = require("./helpers.js");

//console.log(correntistas)

const verficaConta = (numberCpf,correntista) => {
    let newCPF = `${numberCpf}`
    let dadosCorrentista;

    for(let i=0;i<correntista.length;i++){
        if(correntista[i].cpf===newCPF){
            dadosCorrentista=correntista[i]
            break
        }        
    }
    if(dadosCorrentista==undefined){
        return("Não existe CPF cadastrado")
    }else{
        return(dadosCorrentista)
    }
}

const mostrarCorrentista = (correntistas) =>{
    return correntistas
}

const obterCorrentista = (cpf,correntista) =>{
    let correntistaB = {}
    let vConta = verficaConta(cpf,correntista)
    if(vConta == "Não existe CPF cadastrado"){
        return "Erro, não há CPF cadastrado"
    }else{
        correntistaB = vConta
        return(correntistaB)
    }
}

//console.log(obterCorrentista(2312332112,correntistas))

const adicionarCorrentista = (cliente,correntista) => {
    let vConta = verficaConta(cliente.cpf,correntista)
    if(vConta == "Não existe CPF cadastrado"){
        correntista.push(cliente)
        return correntista
    }else{
        return("Já existe cpf cadastrado")
    }
}

const obterCorrentistaId = (index,listaTarefa)=>{

    let tarefa = listaTarefa[index];
    if(tarefa){
        return tarefa
    }else{
        return null 
    }
}

const deletarCorrentistaId = (index,correntistas) => {
    const tarefa = obterCorrentistaId(index,correntistas);
  
    if (tarefa) {
      correntistas.splice(index, 1);
      return true;
    } else {
      return false;
    }
};

/*const atualizarCorrentista = (cpf, propriedade, valor) => {
    const correntista = verficaConta(index,correntista)
    const novoValor = valor
    if (correntista) {
        if (
            propriedade === "saldo" ||
            propriedade === "bancoCode" ||
            propriedade === "agencia" ||
            propriedade === "conta"
        ) {
            return false
        }

        let correntistaAtualizado;
        if (propriedade === "nome") {
            correntistaAtualizado = {
                nome: valor,
                cpf: correntista.dados.cpf,
                codigoDoBanco: correntista.dados.codigoDoBanco,
                agencia: correntista.dados.agencia,
                conta: correntista.dados.conta,
                saldo: correntista.dados.saldo,
            }
        } else if (propriedade === "cpf") {
                correntistaAtualizado = {
                nome: correntista.dados.nome,
                cpf: novoValor,
                codigoDoBanco: correntista.dados.codigoDoBanco,
                agencia: correntista.dados.agencia,
                conta: correntista.dados.conta,
                saldo: correntista.dados.saldo,
            }
        }
        console.log("Atualizado!")
        correntistas.splice(
            correntista.dados.index,
            1,
            correntistaAtualizado
        );
        return true
    } else {
        return false
    }
}*/

//adicionarCorrentista(cliente,correntistas)
//console.log(correntistas)

module.exports = {
    mostrarCorrentista: mostrarCorrentista,
    verficaConta: verficaConta,
    adicionarCorrentista: adicionarCorrentista,
    obterCorrentista: obterCorrentista,
    obterCorrentistaId: obterCorrentistaId,
    deletarCorrentistaId: deletarCorrentistaId
}





