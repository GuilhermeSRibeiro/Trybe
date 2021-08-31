// 01. Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.
use("class");
db.movies.find(
  {
    category: {
      $all: ["action","adventure"],
    },
  },
).pretty();

// 02. Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7.
use("class");
db.movies.find(
  {
    category: {
      $all: ["action"],
    },
    imdbRating: { $gt: 7 },
  },
).pretty();


// 03. Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105]. Dica: lembre-se do operador $each visto no dia anterior.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      ratings: {
        $each: [85, 100, 102, 105],
      },
    },
  },
);
db.movies.find();

// 04. Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102].
use("class");
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102],
      },
    },
  },
);
db.movies.find();

// 05. Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65].
use("class");
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      ratings: {
        $each: [200, 99, 65],
      },
    },
  },
);
db.movies.find();

// 06. Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
use("class");
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gt: 103,
      },
    },
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
  },
).pretty();

// 07. Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
use("class");
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 100,
        $lte: 105,
      },
    },
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
  },
).pretty();

// 08. Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
use("class");
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 64,
        $lte: 105,
        $mod: [9, 0],
      },
    },
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
  },
).pretty();

// 09. Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.
use("class");
db.movies.find(
  {
    category: {
      $all: ["adventure"],
    },
    ratings: {
      $elemMatch: {
        $gt: 103,
      },
    },
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category: 1,
  },
).pretty();

// 10. Retorne somente o título de todos os filmes com dois elementos no array category.
use("class");
db.movies.find(
  {
    category: {
      $size: 2,
    },
  },
  {
    _id: 0,
    title: 1,
  },
).pretty();

// 11. Retorne somente o título de todos os filmes com quatro elementos no array ratings.
use("class");
db.movies.find(
  {
    ratings: {
      $size: 4,
    },
  },
  {
    _id: 0,
    title: 1,
  },
).pretty();

// 12. Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
use("class");
db.movies.find(
  {
    budget: {
      $mod: [5, 0],
    },
    category: {
      $size: 2,
    },
  },
).pretty();

// 13. Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
use("class");
db.movies.find(
  {
    $or: [
      { category: "sci-fi" },
      {
        ratings: {
          $elemMatch: {
            $gt: 199,
          },
        },
      },
    ],
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category: 1,
  },
).pretty();

// 14. Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.


// 15. Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.".


// 16. Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.".


// 17. Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.".


// 18. Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".


// 19. Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".


// 20. Crie um índice do tipo text no campo description.


// 21. Utilizando o operador $text, busque por filmes que contenham o termo "vacation".


// 22. Utilizando o operador $text, busque por filmes que contenham os termos "monstrous" ou "criminal".


// 23. Utilizando o operador $text, busque por filmes que contenham a frase "when he is accidentally".

