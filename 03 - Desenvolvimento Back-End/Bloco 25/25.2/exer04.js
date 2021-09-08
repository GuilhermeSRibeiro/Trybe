// 1. Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  {
    $project: {
      nome: '$name',
      'menor valor relativo': {
        $floor: '$sale_price',
      },
    },
  },
]);

// 2. Retorne o maior número inteiro relativo ao lucro total sobre cada produto. Nota: Desconsiderar taxas (taxes).

