import { resolve } from 'path';
import db from './models/index.mjs';
import initBillsController from './controllers/bill.mjs';
import initPeopleController from './controllers/person.mjs';

export default function routes(app) {
  const PeopleController = initPeopleController(db);
  const BillsController = initBillsController(db);
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  app.get('/', BillsController.bill);
  app.post('/new-bill', BillsController.newBill);
  app.post('/new-person', PeopleController.newPerson);
  app.get('/amountOwed/:id', PeopleController.amountOwed);
}
