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
app.use('/processors', products)
app.use('/processors/:id', products)
app.use('/cart', cartItems)

//PRODUCTION MODE
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

//TO DEPLOY
const port = process.env.PORT || 5000

console.log(port)

app.listen(port, () => console.log(`Server Started On Port ${port}`))