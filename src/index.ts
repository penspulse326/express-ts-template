import express from 'express';
const app = express();
const port = '3000';

app.get('/', (_, res) => {
  res.send('Hello World!');
  console.log('Response sent');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
