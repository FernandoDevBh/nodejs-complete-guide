const path = require('path');
const express =require('express');
const bodyParser = require('body-parser');
const notFoundController = require('./controllers/notFound');
const userRouter = require('./routers/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);


app.use(notFoundController.notFound);

app.listen(3000);