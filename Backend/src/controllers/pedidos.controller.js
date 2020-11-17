require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });

client.connect(
        console.log("Mongo conectado!")
);
    
exports.criarpedido =  async (req, res) => {
    const id = parseInt(req.params.id);
    const {produto, preco} = req.body;
   
    const produtos = {
        cliente: id,
        data: new Date(),
        produto: produto,
        preco: preco
    };
        const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
        pedidos.insertOne(produtos).then(
    
    res.status(201).send({
        message: "Usuário Cadastrado",
        body: {
        },
    }));
}

exports.listapedidosdecliente =  async (req, res) => {
    const id = parseInt(req.params.id);
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
    const filter = { cliente: id  };
    let listadePedidos = []
    await pedidos.find(filter).forEach( (item) => listadePedidos.push(item));
        res.status(200).send({listadePedidos});
}


exports.listapedidosdeproduto =  async (req, res) => {
    const id = parseInt(req.params.id);
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
    const filter = { produto: id  };
    let listadePedidos = []
    await pedidos.find(filter).forEach( (item) => listadePedidos.push(item));
        res.status(200).send({listadePedidos});
}