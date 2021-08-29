// 1. Ordene alfabeticamente os restaurantes pelo nome (atributo name).
use("business");
db.restaurants.find().sort({ name: 1});


// 2. Ordene os restaurantes de forma descrescente baseado nas avaliações.
use("business");
db.restaurants.find().sort({ rating: -1});
