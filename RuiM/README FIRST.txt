1- Na pasta projectary-api\RuiM\src\11_serving_MySqlAPI est� a API que serve dados de uma base de dados
   chamada apitest e da tabela dados1 que tem 3 campos apenas : id(int), nome(varchar) e apelido(varchar)
   * modificar a connection string de acordo com as connection configuradas em cada m�quina
   * se quiser correr a API para servir dados , basta fazer go run execFile, fica o servidor a correr
     na porta 9000 -> http://localhost:9000 
   * as rotas criadas permitem testar com http://localhost:9000/users ou http://localhost:9000/user/1 (por exemplo)
2- Na pasta projectary-frontend\RuiM\Testes\001 est�o 2 ficheiros (nome.js e index.html)
   O ficheiro js � o javascript que faz o GET de um utilizador e o ficheiro html mostra o resultado com os elementos
   embutidos no html 