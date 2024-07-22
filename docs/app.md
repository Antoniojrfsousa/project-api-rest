# Podcast Menager

### Descrição
Um app ao estilo netflix, a onde possa centralizar diferentes espisódios podcasts separados por categoria

### Domínio
Podcast feito em vídeo

### Features

- Listar os epsódios podcasts em sessões de categorias
   -[saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como vou implemetar: 

GET: retorna lista de episodios

resop


  ```js
  [
    {
        podcastName: "flow",
        episode: "VINHETEIRO + RATO BORRACHUDO - Flow #383",
        videoId:"EYrNdgqTb6k",
        cover: "https://i.ytimg.com/vi/EYrNdgqTb6k/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=EYrNdgqTb6k",
        categories: ["saúde","bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "VINTAGE CULTURE - Flow #376",
        videoId: "lz56aZYuoY0"
        cover: "https://i.ytimg.com/vi/lz56aZYuoY0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBj2EQhd4xb-OuH5g3-mx-4AiYw",
        link: "https://www.youtube.com/watch?v=lz56aZYuoY0",
        categories: ["saúde","bodybuilder"]
    }
  ]
  ```

