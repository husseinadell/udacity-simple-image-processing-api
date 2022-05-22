import express from 'express';
import imagesRouter from './routes/api/images';
import homeRouter from './routes/index';
export const app = express();
import morgan from 'morgan';
const port = 3000;

app.use(morgan('dev'));
app.use('/api/images', imagesRouter);
app.use('/', homeRouter);

app.listen(port, () =>
  console.log(`Image processing app listening on port ${port}!`)
);
