import express from 'express';

export const app = express();
const port = 3000;

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
