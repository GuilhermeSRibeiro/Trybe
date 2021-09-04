// 1. Selecione todos os clientes com as suas respectivas transações feitas;
use("agg_example");
db.transactions.find();
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "teste",
    },
  },
]);

// 2. Selecione quatro clientes com as suas respectivas transações recebidas;
use("agg_example");
db.transactions.find();
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "teste",
    },
  },
  {
    $limit: 4,
  },
]);

// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
use("agg_example");
db.transactions.find();
db.clients.aggregate([
  {
    $match: {
      State: "Florida",
    },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "teste",
    },
  },
]);
