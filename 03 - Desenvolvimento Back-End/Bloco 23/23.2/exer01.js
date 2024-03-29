// 1. Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx (utilizando o atributo borough).
use("business");
db.restaurants.find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } }).count();

// 2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American (utilizando o atributo cuisine).
use("business");
db.restaurants.find({ cuisine: { $ne: "American" } }).count();

// 3. Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 (utilizando o atributo rating).
use("business");
db.restaurants.find({ rating: { $gte: 8 } }).count();

// 4. Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
use("business");
db.restaurants.find({ rating: { $lt: 4 } }).count();

// 5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
use("business");
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();
