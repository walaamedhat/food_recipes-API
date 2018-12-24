const fs = require('fs');
module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<div style="display:flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;"><h2>Hello everyone <a href="https://food-recipes-api.herokuapp.com/recipes">Click here</a> to show the API</h2><h4 style="margin-top:0;">Created By Walaa Mohtaseb</h4></div>'));
  })
  app.get('/recipes', (req, res) => {
    db.collection('food_recipes').find({}).toArray(function (err, result) {
        if (err) {
          console.error(err,'err');
            res.send(err);
        } else {
            res.send(result);
        }
    })
  })
  app.post('/addrecipes', (req, res) => {
      // const Ingredients = req.body.ingredients.split(";");
      // const Method = req.body.method.split("/");
      db.collection('food_recipes').insert(recipes, (err, result) =>{
        if (err) {
          res.send({ 'error': 'An error has occured' });
        } else {
          res.send(result)
        }
      })
  })
}
