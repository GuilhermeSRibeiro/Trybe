// Calcule o valor absoluto do lucro total de cada produto.
db.products.aggregate([
  {
    $project: {
      nome: '$name',
      lucro: {
        $abs: {
          $subtract: [
            '$sale_price',
            {
              $add: ['$purchase_price', '$taxes'],
            },
          ],
        },
      },
    },
  }
]);
