const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const bf = require("./funcionalidades.js");
const { adicionarCorrentista, obterCorrentistaId } = require('./funcionalidades.js');

const server = new Koa();

server.use(bodyparser())

let correntistas=[
    {
        Nome:'Maira',
        cpf:'12312312312',
        agencia:'12340',
        conta:'123456',
        bancoCode:1,
        saldo: 10000
    },
    {
        Nome:'Mario',
        cpf:'12312312321',
        agencia:'12341',
        conta:'123451',
        bancoCode:1,
        saldo: 10000
    },
    {
        Nome:'Kaka',
        cpf:'12312332112',
        agencia:'12341',
        conta:'123452',
        bancoCode:1,
        saldo: 10000
    }
]

const cliente =   {
    Nome:'Zeze',
    cpf:'12312332100',
    agencia:'12311',
    conta:'123412',
    bancoCode:1,
    saldo: 20000
}

const atualizarConclusao = (index, nome,listaTarefas) => {
    const tarefa = bf.obterCorrentistaId(index,listaTarefas);
  
    const tarefaAtualizada = {
      Nome: nome,
      cpf: tarefa.cpf,
      agencia:tarefa.agencia,
      conta:tarefa.conta,
      bancoCode:tarefa.bancoCode,
      saldo: tarefa.saldo
    };
  
    if (tarefa) {
      listaTarefas.splice(index, 1, tarefaAtualizada);
      return tarefaAtualizada;
    } else {
      return false;
    }
  };



server.use((ctx) => {
    const path = ctx.url;
    const method = ctx.method;
    if(path=='/correntistas'){
        if(method=='GET'){
            ctx.body = bf.mostrarCorrentista(correntistas)
        }else if(method=='POST'){
            const clienteNovo = ctx.request.body
            bf.adicionarCorrentista(clienteNovo,correntistas)
            //ctx.body = bf.mostrarCorrentista(correntistas)
            ctx.body = clienteNovo
        }
        } else if (path.includes("/correntistas/")) {
            const pathQuebrado = path.split("/");
            if (pathQuebrado[1] === "correntistas") {
                const id = pathQuebrado[2];
                       
                if (id) {
                    if (method === 'GET'){  
                        const clienteNovo = bf.obterCorrentistaId(id,correntistas)
                        ctx.body = clienteNovo    
                    }else if(method ==='PUT'){
                        const nome = ctx.request.body.nome
                        if(nome){
                            const resposta = atualizarConclusao(id,nome,correntistas)
                            if (resposta) {
                                ctx.body = resposta;
                              } else {
                                ctx.status = 404;
                                ctx.body = resposta;
                              } 
                        }
                    }else if(method === 'DELETE'){
                        const resposta = bf.deletarCorrentistaId(id,correntistas)
                        if(resposta===true){
                            ctx.body = 'Correntista deletado com sucesso'
                        }else{
                            ctx.body = 'Não foi possível deletar correntista'
                        }
                    }
                }
            }
        }else{
            ctx.status=404
            ctx.body = 'Error, não encontrado'
        }  
})

server.listen(8081, () => {
    console.log('Rodando na porta 8081!')
});