// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
db.products.aggregate([
  {
    $project: {
      nome: '$name',
      'custo_total': {
        $add: ['$purchase_price', '$taxes'],
      },
    },
  },
]);
