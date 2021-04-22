import { resolve } from 'path';
import db from './models/index.mjs';
import initBillsController from './controllers/bills.mjs';
import initPeopleController from './controllers/people.mjs';

export default function routes(app) {
  const BillsController = initBillsController(db);
  const PeopleController = initPeopleController(db);

  app.post('/bill', BillsController.create);
  app.post('/person', PeopleController.addPerson);
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
