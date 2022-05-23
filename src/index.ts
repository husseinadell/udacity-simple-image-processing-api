import express from 'express';
import imagesRouter from './routes/api/images';
import homeRouter from './routes/index';
export const app = express();
import morgan from 'morgan';
import { makeThumbPath } from './utils/image-manager';
const port = 3000;

app.use(morgan('dev'));
app.use('/api/images', imagesRouter);
app.use('/', homeRouter);

app.listen(port, async (): Promise<void> => {
  await makeThumbPath();
  console.log(`Image processing app listening on port ${port}!`);
});
