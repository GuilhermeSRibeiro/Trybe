// 1. Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $project: {
      nome: '$name',
      'total em estoque': {
        $multiply: ['$sale_price', '$quantity'],
      },
    },
  },
]);

// 2. Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([
  {
    $project: {
      nome: '$name',
      'lucro total de venda': {
        $multiply: [
          {
            $subtract: [
              '$sale_price',
              {
                $add: ['$purchase_price', '$taxes'],
              },
            ],
          },
          '$quantity',
        ],
      },
    },
  },
]);
