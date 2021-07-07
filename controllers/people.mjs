export default function initPeopleController(db) {
  const addPerson = async (req, res) => {
    console.log(req.body);
    try {
      const newPerson = await db.Person.create({
        name: req.body.name,
        amount: Number(req.body.cost),
        bill_id: Number(req.cookies.billId),
      });
      console.log(newPerson);
      res.send({ newPerson });
    }
    catch (error) {
      console.log(error);
    }
  };

  const mealCost = async (req, res) => {
    console.log(req.body);

    try {
      await req.body.peopleList.forEach((person) => {
        db.Person.update({
          amount: Math.round(person.amount),
        }, {
          where: {
            id: person.id,
          },
          returning: true,
        });
      });
      res.sendStatus(200);
    }
    catch (error) {
      console.log(error);
    }
  };

  return { addPerson, mealCost };
}
