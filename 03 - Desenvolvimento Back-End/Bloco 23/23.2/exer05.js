// Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
use("superheroes");
db.superheroes.findOne();

// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
use("superheroes");
db.superheroes.find({ "aspects.height": {$lt: 180} }).pretty();

// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
use("superheroes");
db.superheroes.count({ "aspects.height": {$lt: 180} });

// Exercício 4: Retorne o total de super-heróis com até 1.80m.
use("superheroes");
db.superheroes.count({ "aspects.height": {$lte: 180} });

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
use("superheroes");
db.superheroes.findOne({ "aspects.height": {$gte: 200} });

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
use("superheroes");
db.superheroes.count({ "aspects.height": {$gte: 200} });

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
use("superheroes");
db.superheroes.find({ "aspects.eyeColor": "green" }).pretty();

// Exercício 8: Retorne o total de super-heróis com olhos azuis.
use("superheroes");
db.superheroes.count({ "aspects.eyeColor": "blue" });

// Exercício 9: Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").
use("superheroes");
db.superheroes.find({ "aspects.hairColor": { $in: ["black","No Hair"] } }).pretty();

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
use("superheroes");
db.superheroes.count({ "aspects.hairColor": { $in: ["black","No Hair"] } });

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
use("superheroes");
db.superheroes.count({ "aspects.hairColor": { $nin: ["black","No Hair"] } });

// Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
use("superheroes");
db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).pretty();

// Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.
use("superheroes");
db.superheroes.find({$nor: [{race: "Human"},{"aspects.height": {$gt: 180}}]}).pretty();

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
use("superheroes");
db.superheroes.find({$and:[{"aspects.height":{$in:[180,200]}},{publisher:"Marvel Comics"}]}).pretty();

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
use("superheroes");
db.superheroes.find({$and:[{"aspects.weight":{$gte:80,$lte:100}},{"race":{$in:["Human","Mutant"]}},{"publisher":{$ne:"DC Comics"}}]}).pretty();

// Exercício 16: Retorne o total de documentos que não contêm o campo race.
use("superheroes");
db.superheroes.count({race: {$exists: false}});

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor.
use("superheroes");
db.superheroes.count({"aspects.hairColor": {$exists: true}});

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures.
use("superheroes");
db.superheroes.deleteOne({publisher: "Sony Pictures"});

// Exercício 19: Remova todos os documentos publicados pelo George Lucas.
use("superheroes");
db.superheroes.deleteMany({publisher: "George Lucas"});
