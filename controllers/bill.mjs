import sequelizePackage from 'sequelize';

const { Op } = sequelizePackage;

export default function initBillsController(db) {
  const bill = async (req, res) => {
    res.render('newBill');
  };

  const newBill = async (req, res) => {
    const { billName } = req.body;
    try {
      const bill = await db.Bill.create({
        name: billName,
      });
      res.redirect(`home?id=${bill.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return { bill, newBill };
}
