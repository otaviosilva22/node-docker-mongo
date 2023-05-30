# Aplicação CRUD com Node.js, Mongo e Docker.
CRUD desenvolvido com Node.js e várias outras tecnologias e ferramentas.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [Mongo](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com/)
- [ThunderClient](https://www.thunderclient.com/)

## 🚀 Como Iniciar
Execute o docker-compose por meio do comando:

~~~bash
docker-compose up
~~~

## Collection
A collection das APIs foi feita com apoio da extensão ThunderClient para Vscode, podendo ser visualizada clicando <a href='./src/thunder-collection_node-docker-mongo.json'>aqui</a>.

## Exemplo:

~~~ bash
REQUEST (GET): 

http://localhost:3333/readAll

RESPONSE (JSON FORMAT):

{
  "statusCode": 200,
  "success": true,
  "result": [
    {
      "_id": "64761d6dad3a0cfa58369b3c",
      "value": 10,
      "description": "venda",
      "move_date": "Tue May 30 2023 00:00:00 GMT+0000",
      "created_at": "2023-05-30T15:59:41.634Z",
      "__v": 0
    }
  ]
}

~~~


## Autor
Otávio Augusto Souza Silva.


[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:otavio.ssilva22@gmail.com)](mailto:otavio.ssilva22@gmail.com)