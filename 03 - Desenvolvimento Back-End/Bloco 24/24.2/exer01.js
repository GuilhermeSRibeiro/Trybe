// Exercício 1: Adicione a categoria "superhero" ao filme Batman.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } },
);
db.movies.find();

// Exercício 2: Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: {
        $each: [
          "villain",
          "comic-based",
        ],
      },
    },
  },
);
db.movies.find();

// Exercício 3: Remova a categoria "action" do filme Batman.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $pull: { category: "action" },
  },
);
db.movies.find();

// Exercício 4: Remova o primeiro elemento do array category do filme Batman.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: { category: -1 },
  },
);
db.movies.find();

// Exercício 5: Remova o último elemento do array category do filme Batman.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: { category: 1 },
  },
);
db.movies.find();

// Exercício 6: Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: { category: "action" },
  },
);
db.movies.find();

// Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone.
use("class");
db.movies.updateMany(
  {
    $or: [
      { title: "Batman" },
      { title: "Home Alone" },
    ],
  },
  {
    $push: { category: "90's" },
  },
);
db.movies.find();

// Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
// {
//   "actor": "Macaulay Culkin",
//   "character": "Kevin"
// },
// {
//   "actor": "Joe Pesci",
//   "character": "Harry"
// },
// {
//   "actor": "Daniel Stern"
// }
use("class");
db.movies.updateMany(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin",
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry",
          },
          {
            "actor": "Daniel Stern",
          },
        ],
      },
    },
  },
);
db.movies.find();

// Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.
// Dica: Para isso, leia aqui sobre o operador $.
use("class");
db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  {
    $set: { "cast.$.character": "Marv" },
  },
);
db.movies.find();

// Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
// {
//   "character": "Batman"
// },
// {
//   "character": "Alfred"
// },
// {
//   "character": "Coringa"
// }
use("class");
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        $each: [
          {
            "character": "Batman"
          },
          {
            "character": "Alfred"
          },
          {
            "character": "Coringa"
          },
        ],
      },
    },
  },
);
db.movies.find();

// Exercício 11: Produza três querys para o filme Batman :
// * Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman ;
// * Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred ;
// * Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.
// Dica: Para isso, leia aqui sobre o operador $.


// Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
// Dica: Para isso, leia aqui sobre o operador $.
