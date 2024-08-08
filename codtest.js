
/* códigos adicionais do arquivo autores-lista.ejs */

<th scope="col">#</th>
<th scope="col">autor</th>
<th scope="col">Nacionalidade</th>
<th scope="col">Operações</th>

<td scope="row"><%= item.IdAutor%></td>
<td scope="row"><%= item.NoAutor%></td>
<td scope="row"><%= item.NoNacionalidade%></td>


<a href="/autores/edit/<%=item.IdAutor%>" class = "btn btn-primary">Editar</a>
<a href="/autores/delete/<=%item.IdAutor%>" class = "btn btn-danger">Excluir</a>


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


// Autores-add.ejs
<% if (resultado.IdAutor) {%>
    <input type = "hidden" id= "IdNacionalidade" name = "IdNacionalidade" value="<%= resultado.IdNacionalidade%>">
    <h1>Alterar Autores</h1>
    <form method = "#" action = "/autores/edit/<%= resultado.IdAutor%>" class="row g-3"></form>
<%} else {%>
    <h1>Cadastro de Autores</h1>
    <form method = "POST" action = "/autores/add" class="row g-3">
<%}%>
  <div class="col-md-6">
    <label for="inputAutores" class="form-label">Autor</label>
    <% if (resultado.IdAutor) {%>
      <input type="text" class="form-control" id="inputAutores" name ="nome" placeholder="Nome" value="<%= resultado.NoAutor%>">
    <%} else {%>
    <input type="text" class="form-control" id="inputAutores" name ="nome" placeholder="Nome">
    <%}%>
  </div>