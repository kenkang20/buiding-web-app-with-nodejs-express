const express = require('express');
const chalk = require('chalk');
// DEBUG=* node app.js
// Window: set DEBUG=* & node app.js, set DEBUG=app & node app.js
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;


// morgan('combined')
app.use(morgan('tiny'));

// example of middleware
// app.use((req, res, next) => {
//    debug('my middleware');
//    next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));

require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')));
app.set('views', './src/views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

const nav = [
    { link: '/books', title: 'Books' },
    { link: '/authors', title: 'Authors' }
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    // res.send('Hello from my library app');
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render(
        'index',
        {
            nav: [
                { link: '/books', title: 'Books' },
                { link: '/authors', title: 'Authors' }
            ],
            title: 'MyLibrary'
        }
    );
});

app.listen(port, () => {
    debug(`listening at port ${chalk.green(port)}`);
});
