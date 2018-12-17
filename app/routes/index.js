const foodRoutes = require('./food_routs');

module.exports = function(app, db) {
  foodRoutes(app,db)
}
