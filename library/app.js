const express = require('express');
const chalk = require('chalk');
// DEBUG=* node app.js
// Window: set DEBUG=* & node app.js, set DEBUG=app & node app.js
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// morgan('combined')
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')));

app.get('/', (req, res) => {
    // res.send('Hello from my library app');
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
    debug(`listening at port ${chalk.green(port)}`);
});
