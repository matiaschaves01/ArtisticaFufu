const express = require("express");
const app = express();
const session = require('express-session')
const cors = require('cors');
const loggedMiddleware = require('./middlewares/loggedMiddleware');
const PORT = process.env.PORT || 3007;
const cookie = require('cookie-parser'); 
const path = require("path");
const methodOverride = require('method-override');


const mainRouters = require("./routes/mainRouters");
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');
const productApiRoutes = require('./api/routes/productApiRoutes');
const userApiRoutes = require('./api/routes/userApiRoutes');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "js")));

app.set("view engine", "ejs");

app.use(express.json());

//metodo put delete
app.use(methodOverride('_method'))

app.use(session({
    secret: 'Esto es un secreto',
    resave: false,
    saveUninitialized : false
}));

app.use(cookie('SHHHHHH'));

app.use(loggedMiddleware);

app.use(cors({
    origin: '*'
}))


// Routes
app.use(mainRouters);
app.use(userRoutes);
app.use('/products', productRoutes);

//Api Routes
app.use('/api/user', userApiRoutes);
app.use('/api/products', productApiRoutes);

app.use((req, res, next) => {
    res.status(404).render('error', {
        css: null,
        title: 'Error'
    });
    next()
});
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
