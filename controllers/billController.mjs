export default function initBillsController(db) {
  const index = async (request, response) => {
    try {
      const allBills = await db.Bill.findAll();
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const newBill = await db.Bill.create({ name: request.body.bill });
      response.send(newBill);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    create,
  };
}
