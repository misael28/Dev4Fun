//function one - create a function to read a code and return the bank's name.

//Código	Nome do Banco
const obterNomeBanco = (codigo) =>{

    const bancos = {
        001: 'Banco do Brasil S.A.',
        033: 'Banco Santander (Brasil) S.A.',
        104: 'Caixa Econômica Federal',
        237: 'Banco Bradesco S.A.',
        341: 'Banco Itaú S.A.',
        356: 'Banco Real S.A. (antigo)',
        389: 'Banco Mercantil do Brasil S.A.',
        399: 'HSBC Bank Brasil S.A.',
        422: 'Banco Safra S.A.',
        453: 'Banco Rural S.A.',
        633: 'Banco Rendimento S.A.',
        652: 'Itaú Unibanco Holding S.A.',
        745: 'Banco Citibank S.A.'
    }

    return(bancos[codigo]
        .replace("S.A.","")
        .replace("Holding","")
        .replace("(Brasil)","")
        .replace("(antigo)","").trim());
}


//obterNomeBanco(356) 

//function two - cleaning text (removing ., - )

const limpaCPF = (texto) =>{
    let textoTransformado=texto.replace(".","").replace("-","")
    
    while (textoTransformado.indexOf(".") !== -1){
        textoTransformado=textoTransformado.replace(".","")
    }

    while (textoTransformado.indexOf("-") !== -1){
        textoTransformado=textoTransformado.replace("-","")
    }

    return textoTransformado
}

//function three -- format a string to a CPF

const formatarCPF = (texto) =>{
    let cpf=`${texto.substr(0,3)}.${texto.substr(3,3)}.${texto.substr(6,3)}-${texto.substr(9,2)}`;
    
    return cpf 
}

//function four -- formating a bank number agency

const formatarAgencia = (texto) =>{
    let agencia=`${texto.substr(0,4)}-${texto.substr(4,1)}`;
    
    return agencia
}

//function five -- formating a bank number account 

const formatarConta = (texto) =>{
    let conta=`${texto.substr(0,6)}-${texto.substr(6,1)}`;
    
    return conta
}

module.exports = {
    obterNomeBanco: obterNomeBanco,
    limpaCPF: limpaCPF,
    formatarCPF: formatarCPF,
    formatarConta: formatarConta,
    formatarAgencia: formatarAgencia
}