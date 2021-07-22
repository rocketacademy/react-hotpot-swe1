import { resolve } from 'path';
import db from './models/index.mjs';

export default function routes(app) {
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  app.post('/new-bill', async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const datavalues = await db.Bill.create({ name });
    console.log(datavalues.id);
    res.json(datavalues.id);
  });

  app.post('/api/new-person', async (req, res) => {
    const { name, billId } = req.body;
    const id = Number(billId.id);
    console.log('====>>', typeof id, billId);
    const person = await db.People.create({ name, billId: id });
    console.log(person.name);
    console.log(person);
    res.json({
      name: person.name,
      id: person.id,
      billId: person.billId,
    });
  });
}
