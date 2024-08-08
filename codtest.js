
/* códigos adicionais do arquivo autores-lista.ejs */

<th scope="col">#</th>
<th scope="col">autor</th>
<th scope="col">Nacionalidade</th>
<th scope="col">Operações</th>

<td scope="row"><%= item.IdAutor%></td>
<td scope="row"><%= item.NoAutor%></td>
<td scope="row"><%= item.NoNacionalidade%></td>


<a href="/edit/<%=item.IdAutor%>" class = "btn btn-primary">Editar</a>
<a href="/delete/<=%item.IdAutor%>" class = "btn btn-danger">Excluir</a>


/* Códigos para autores.js */

// adicionar no router get
router.get('/add', function(req, res) {
    res.render('autores-add', {resultado: {}});
});

// nova rota
router.get('/edit/:id', function(req, res) {
    let id = req.params.id;
    let cmd = 'SELECT IdAutor, NoAutor, IdNacionalidade FROM TbAutor WHERE IdAutor = ?;';
    db.query(cmd, [id], function(erro,listagem){
      if (erro){
        res.send(erro);
      }
        res.render('autores-add', {resultado: listagem[0]});
    });
});