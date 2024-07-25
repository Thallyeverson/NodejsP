var express = require('express');
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

module.exports = router;
