import sequelizePackage from 'sequelize';

const { Op } = sequelizePackage;

export default function initPeopleController(db) {
  const newPerson = async (req, res) => {
    const { name, amount, billId } = req.body;
    console.log('*************************************');
    try {
      // create new row in people db
      const person = await db.Person.create({
        name,
        amount,
        billId,
      });

      // update bill total
      const bill = await db.Bill.findByPk(billId);
      if (bill.total === null) {
        bill.total = Number(amount);
      } else {
        bill.total += Number(amount);
      }
      bill.save();
    } catch (err) {
      console.log(err);
    }
  };

  const amountOwed = async (req, res) => {
    const { id } = req.params;
    const peopleList = await db.Person.findAll({
      where: {
        billId: id,
      },
    });
    for (let i = 0; i < peopleList.length; i += 1) {

    }
  };
  return { newPerson, amountOwed };
}
