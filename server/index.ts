'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan');
const cors = require('@koa/cors');
const router = require('./router');
const { PORT, URL } = require('./config');
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(morgan('dev'));
app.use(router.routes());

app.listen(PORT, () => console.log(`Server running on ${URL}${PORT}`));

