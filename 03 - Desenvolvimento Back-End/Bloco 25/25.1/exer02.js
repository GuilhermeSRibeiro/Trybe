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


// 3. Selecione o valor total de transações por banco;


// 4. Selecione os bancos que têm o valor total de transações maior que 1000.

