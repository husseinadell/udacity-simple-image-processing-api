import express from 'express';
import imagesRouter from './routes/api/images';
export const app = express();
import morgan from 'morgan';
const port = 3000;

app.use(morgan('dev'));
app.use('/api/images', imagesRouter);

app.listen(port, () =>
  console.log(`Image processing app listening on port ${port}!`)
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export const myFunc = (num: number): number => {
  console.log('myFunc');
  return num * num;
};
