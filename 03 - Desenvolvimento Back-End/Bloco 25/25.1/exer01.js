// 1. Selecione todas as transações feitas pelo cliente chamado "Dave America".
use("agg_example");
db.transactions.aggregate(
  [{
    $match: { from: "Dave America" },
  }],
);

// 2. Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".


// 3. Selecione três transações com o valor acima de 1000.

