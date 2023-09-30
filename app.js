const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');


const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressSanitizer());

app.use((req,res,next)=>{
  res.status(404).json({message:'Not Found'});
});
module.exports = app;
