Caso ocorra algum problema ao tentar conectar o banco de dados pode ser que o Mongo da sua máquina esteja desligado,
 neste caso rode o comando ´sudo service mongod start´ e depois teste com o comando ´mongo´.


Para guardar os dados do banco de dados digite no terminal dentro do diretório backend:
mongodump --db dbicc --collection aulas

Para recuperar os dados do banco de dados digite no terminal dentro do diretório backend:
mongorestore --db dbicc dump/dbicc


