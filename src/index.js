const express = require('express');
const cookiesParser = require('cookie-parser');

const routes = require('./routes')
const config = require('./config');
const authMiddleware = require('./middlewares/authMiddlewares');
const setupViewEngine  = require('./config/viewEngine');
const initDatabase = require('./config/databaseinit');

const app = express();
setupViewEngine(app);

app.use(express.static('./src/public'));
app.use(cookiesParser());
app.use(express.urlencoded({extended: false}));
app.use(authMiddleware.authentication);
app.use(routes);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err));
    