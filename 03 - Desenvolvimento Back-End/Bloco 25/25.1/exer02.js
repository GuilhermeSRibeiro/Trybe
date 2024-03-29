// 1. Selecione todos os bancos, ou seja, valores do campo bank;
use("agg_example");
db.transactions.aggregate(
  {
    $group: {
      _id: "$bank",
    },
  },
);

// 2. Selecione o valor total das transações em cada banco e quantas são;
use("agg_example");
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      "quantidade total": { $sum: 1 },
      "valor total": { $sum: "$value" },
    },
  },
]);

// 3. Selecione o valor total de transações por banco;
use("agg_example");
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      "total transações": { $sum: "$value" },
    },
  },
]);

// 4. Selecione os bancos que têm o valor total de transações maior que 1000.
use("agg_example");
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      "total transações": { $sum: "$value" },
    },
  },
  {
    $match: {
      "total transações": { $gt: 1000 },
    },
  },
]);
