var express = require('express');
let db = require('../utils/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projeto de Programação WEB' });
});

router.get('/TESTE', function(req, res, next) {
  res.send("<h2>TESTANDO 1...2...3 </h2>");
});

router.get('/Boanoite/:nome', function(req, res, next) {
res.send("<h2>Boa noite "+ req.params.nome +"!</h2>");
});

router.get('/imc', function(req, res,) {
  var peso = req.query.peso;
  var estatura = req.query.estatura;

  var imc = peso / Math.pow(estatura, 2);
  var msg = "<h3> Seu IMC é: " + imc.toFixed(2) + "</h3>";
  res.send(msg);
});

let autores = ["Mirian Leitão", "Ana Beatriz Silva Barbosa", "Stephen King"];
router.use(express.urlencoded({extended: true}));

router.get('/autores', function(req, res) {
  res.json(autores)
})

router.get('/autores/consulta/:id', function(req, res) {
  let id = req.params.id;
  res.json(autores[id]);
})

router.post('/autores/inclui', function(req, res) {
  let nome = req.body.nome;
  autores.push(nome);
  res.json(autores);
})

router.put('/autores/altera/:id', function(req, res) {
  let id = req.params.id;
  let nome = req.body.nome;

  autores[id] = nome;
  res.json(autores);
})

router.delete('/autores/exclui/:id', function(req, res) {
  let id = req.params.id;

  autores.splice(id, 1);
  res.json(autores);
})

module.exports = router;
