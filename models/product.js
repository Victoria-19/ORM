// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {  // define columns
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Category', // Assuming your category model is named 'Category'
          key: 'id'
        }
  },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
              isDecimal: true
            }
   },
 } 
);

module.exports = Product;