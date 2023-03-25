import { definePlatRoutes } from '@alt-table/domain/carte';
import bodyParser from 'body-parser';
import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

definePlatRoutes(app);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
