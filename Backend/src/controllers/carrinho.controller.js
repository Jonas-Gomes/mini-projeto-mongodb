require('dotenv').config();
const mongo = require("mongo");

const client = mongo.createClient({
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
});

client.on("connect", function(error){
    console.log("Mongo conectado!");
});

exports.criarcarrinho = async (req, res) => {
    var atual = []
    const id = parseInt(req.params.id);
    const {codigo, quantidade} = req.body;
    const produtos = {
        codigo: codigo,
        quantidade: quantidade,    
    };


    client.get(id, function(err, reply){

    if(reply != null){
        atual = JSON.parse(reply)
        console.log("Este carrinho ja está em uso");
        
        atual.push(produtos)      
        
        client.setex(id, 3600, JSON.stringify(atual), function(err, resp){
            if(err) throw err;
            console.log(resp);
       });
        
       res.status(201).send({
            message: "Carrinho atualizado!",
            body: {
              product: { id}
            },
          });
    }
    else{

    atual.push(produtos)
    
    client.setex(id, 3600, JSON.stringify(atual), function(err, resp){
    if(err) throw err;
    console.log(resp);
    
    }); 
  
    res.status(201).send({
      message: "Carrinho criado!",
      body: {
        product: { id}
      },
    });
    }
    });
};

exports.listarCarrinho = async (req, res) => {
    const id = parseInt(req.params.id);
    client.get(id, function(err, reply){
    if(reply != null){
        const teste = JSON.parse(reply);
        res.status(200).send(teste);
    }else{
        console.log("Not found");
    }
});
};

exports.excluirCarrinho = async (req, res) => {
    const id = parseInt(req.params.id);
    client.del(id, function(err, resp){
        if(err) throw err;
        console.log(resp)
});
    res.status(201).send({
        message: "Carrinho Deletado",
        body: {
        product: { id}
    },
  });
};