import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import routes from '../routes';
import { notFound, convertError } from '../middleware/error';

const app = express();

// Logger
app.use(logger('dev'));

// Cookie parser
app.use(cookieParser());

// Request body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// IP of frontend.
const whiteList = ['https://0.0.0.0:8080'];
const corsOptionsDelegate = (req, callback) => {
 let corsOptions;
 if (whiteList.indexOf(req.header("Origin")) !== -1) {
   corsOptions = { origin: true };
 } else {
   corsOptions = { origin: false };
 }
 callback(null, corsOptions);
}

// Enabling cors for the whitelisted IP.
app.use(cors(corsOptionsDelegate));

// Connecting all routes to app.
app.use('/', routes);

app.use(notFound);

app.use(convertError);

export default app;
