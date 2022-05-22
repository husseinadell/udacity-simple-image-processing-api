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
  res.send(`
    <h1>Udacity Image Processing API</h1>
    <p>Listening at <code><a href="/api/images">/api/images</a></code> 
      for queries containing at least a valid filename. 
      Optionally use both width and height to set the size.
    </p>
    <p>
      Examples:
        <ul>
          <li><a href="/api/images?filename=test">/api/images?filename=test</a></li>
          <li><a href="/api/images?filename=test&width=100&height=100">/api/images?filename=test&width=100&height=100</a></li>
        </ul>
    </p>`);
});

export const myFunc = (num: number): number => {
  console.log('myFunc');
  return num * num;
};
