// 1. Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      let: { nome: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$from', '$$nome'],
            },
          },
        },
      ],
      as: 'transações_feitas',
    },
  },
]);

// 2. Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      let: { nome: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$to', '$$nome'],
            },
          },
        },
      ],
      as: 'transações_recebidas',
    },
  },
  {
    $sort: { State: 1 },
  },
  { $limit: 4 },
]);

// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

