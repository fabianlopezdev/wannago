'use strict';

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const morgan = require('koa-morgan');

const { PORT, URL } = require('./config');
const app = new Koa();

app.listen(PORT, () => console.log(`Server running on ${URL}${PORT}`));

