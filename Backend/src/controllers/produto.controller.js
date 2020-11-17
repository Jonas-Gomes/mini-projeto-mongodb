const db = require("../config/database");

//  Método responsável por criar um novo 'Produto' no banco SQL Postegres:

exports.criarProduto = async (req, res) => {
  const {descricao, preco} = req.body;
  const { rows } = await db.query(
    "INSERT INTO produto (descricao, preco) VALUES ($1, $2)",
    [descricao, preco]
  );

  res.status(201).send({
    message: "Produto novo cadastrado com sucesso!",
    body: {
      product: { descricao, preco }
    },
  });
};


//  Método responsável por listar todos os 'Produtos' no banco SQL Postegres:

exports.listarTodosProdutos = async (req, res) => {
  const response = await db.query('SELECT * FROM produto ORDER BY id ASC');
  res.status(200).send(response.rows);
};


//  Método responsável por selecionar 'Produto' pelo 'Id' no banco SQL Postegres:

exports.buscaProdutoPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM produto WHERE id = $1', [id]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].id)
}

//  Método responsável por atualizar o 'Produto' pelo 'Id' no banco SQL Postegres:

exports.atualizarProdutoPorrId = async (req, res) => {
  const id = parseInt(req.params.id);
  const{descricao, preco} = req.body;

  const response = await db.query(
    "UPDATE produto SET descricao = $1, preco = $2 WHERE id = $3",
    [descricao, preco, id]
  );
  res.status(200).send({message: "produto com sucesso !"});
};

//  Método responsável por excluir 'Produto' pelo 'Id' no banco SQL Postegres:

exports.deletarProdutoId = async (req, res) => {
  const produtoId = parseInt(req.params.id);
  await db.query("DELETE FROM produto WHERE id = $1",[
    produtoId
  ]);
  res.status(200).send({message: "produto deletado com sucesso ", produtoId});
}





