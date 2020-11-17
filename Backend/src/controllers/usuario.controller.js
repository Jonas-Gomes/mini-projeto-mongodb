const db = require("../config/database");

exports.createUser = async (req, res) => {
  const { nome} = req.body;
  const { rows } = await db.query(
    "INSERT INTO usuario (nome) VALUES ($1)",
    [nome]
  );

  res.status(201).send({
    message: "Usuário novo Cadastrado",
    body: {
      user: { nome }
    },
  });
};

exports.listarUser = async (req, res) =>{
  const response = await db.query('SELECT * FROM usuario ORDER BY id ASC');
  res.status(200).send(response.rows);
}

exports.buscaUsuarioporId = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM usuario WHERE id = $1', [id]);
  res.status(200).send(response.rows);
  console.log(response.rows[0].id)
}

exports.atualizarUserId = async (req, res) => {
  const id = parseInt(req.params.id);
  const{nome} = req.body;

  const response = await db.query(
    "UPDATE usuario SET nome = $1 WHERE id = $2",
    [nome, id]
  );
  res.status(200).send({message: "usuario atualizado!"});
};

exports.deletarUserId = async (req, res) => {
  const usuarioId = parseInt(req.params.id);
  await db.query("DELETE FROM usuario WHERE id = $1",[
    usuarioId
  ]);
  res.status(200).send({message: "usuario deletado!", usuarioId});
}
