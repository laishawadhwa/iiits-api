// import { readFileSync } from 'fs';
// import * as path from 'path';
import App from './App';
import routes from './routes';
import { connect } from 'mongoose';

// const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
// const certificate = readFileSync(path.join(__dirname, '../domain.crt'));

// const credentials = { key: privateKey, cert: certificate };
connect('mongodb://srijanreddy98:hackthecode18@ds161112.mlab.com:61112/techfesia2018hackthecode', {useNewUrlParser: true});
const app = new App(/* credentials */);

app.route(routes)
  .serve();