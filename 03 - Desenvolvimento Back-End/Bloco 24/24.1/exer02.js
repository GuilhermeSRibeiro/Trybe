// Exercício 14: Remova o campo class dos documentos que possuem esse campo com o valor unknown.
use("class");
db.xmen.updateMany(
  { class: "unknown" },
  { $unset: { class: "" } },
);

// Exercício 15: Produza uma query que renomeie os campos de name para hero_name, e de true_name para full_name; adicione o campo power com valor 100, em todos os documentos.
use("class");
db.xmen.updateMany(
  {},
  {
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: {
      power: 100,
    },
  },
);

// Exercício 16: Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.
use("class");
db.xmen.updateMany(
  {
    $or: [
      { class: "omega" },
      { class: "gama" },
    ],
  },
  {
    $max: {
      power: 500,
    },
  },
);

// Exercício 17: Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300.
use("class");
db.xmen.updateMany(
  {
    class: "gama",
  },
  {
    $min: { power: 300 },
  },
);

// Exercício 18: Decremente em 100 o poder dos mutantes que não possuem a propriedade class.
use("class");
db.xmen.updateMany(
  {
    class: { $exists: false },
  },
  {
    $inc: { power: -100 },
  },
);

// Exercício 19: Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
use("class");
db.xmen.updateMany(
  {
    $or: [
      {
        $and: [
          { occupation: "Senior Staff" },
          { power: { $gt: 100 } },
        ],
      },
      {
        $and: [
          { occupation: "Junior Staff" },
          { power: { $gt: 200 } },
        ],
      },
    ],
  },
  {
    $set: {
      areas: ["Students Room"],
    },
  },
);

// Exercício 20: Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
use("class");
db.xmen.updateMany(
  {
    areas: {
      $exists: false,
    },
    occupation: "Junior Staff",
  },
  {
    $set: {
      areas: ["Outside"],
    },
  },
);
