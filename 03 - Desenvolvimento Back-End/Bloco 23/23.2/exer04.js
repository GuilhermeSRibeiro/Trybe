// 1. Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
use("business");
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });


// 2. Remova todos os restaurantes que possuem culinária do tipo American.
use("business");
db.restaurants.deleteMany({ cuisine: "American" });
