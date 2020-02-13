const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config')

const app = express();

//bodyparser middleware & cors(google chrome)

app.use(express.json())
app.use(cors());

//DB Config
const db = config.get("mongoURI");

//Connect to MongoDB with model drive called mongoose
mongoose.connect(db,{useNewUrlParser: true, useCreateIndex: true})
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err));

//API'S
const products = require('./routes/api/products')
const cartItems = require('./routes/api/cart')

//USE ROUTES
app.use('api/processors', products)
app.use('api/processors/:id', products)
app.use('api/cart', cartItems)

//Handle Production
if(process.env.NODE_ENV === 'production'){
  //Static folder
  app.use(express.static(__dirname + '/client/build'));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/client/build/index.html'));
}

//TO DEPLOY
const port = process.env.PORT || 5000

console.log(port)

app.listen(port, () => console.log(`Server Started On Port ${port}`))