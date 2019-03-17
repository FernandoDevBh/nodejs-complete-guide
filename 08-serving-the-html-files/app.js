const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const headerActive = require('./util/headerActive');
const { links } = require('./routes/admin')

const app = express();

/*
// utilizado para utilizar handlebars
const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/', 
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));*/
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', links: headerActive(links, 'none')});
});

app.listen(3000);
