const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//importando rutas
const apiRoutes = require('./routes/api');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(morgan('dev'));

//Rutas 
app.use('/', apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('Server Working! on Port 3000');
});

 