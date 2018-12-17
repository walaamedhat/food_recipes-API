module.exports = function(app, db) {
  app.get('/recipes', (req, res) => {
    db.collection('food_recipes').find({}).toArray(function (err, result) {
        if (err) {
          console.log(err,'err');
            res.send(err);
        } else {
            console.log(result.length,'result');
            res.send(result);
        }
    })
  })
  app.post('/addrecipes', (req, res) => {
      const Ingredients = req.body.ingredients.split(";");
      const Method = req.body.method.split("/");
      const recipes = { category: req.body.category, name: req.body.name, img: req.body.img, ingredients: Ingredients, method: Method};
      db.collection('food_recipes').insert(recipes, (err, result) =>{
        if (err) {
          res.send({ 'error': 'An error has occured' });
        } else {
          res.send(result)
        }
      })
  })
}
