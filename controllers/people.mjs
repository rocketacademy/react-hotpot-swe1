export default function initPeopleController(db) {
  const addPerson = async (req, res) => {
    try {
      const newPerson = await db.Person.create({
        name: req.body.name,
        bill_id: Number(req.cookies.billId),
      });
      console.log(newPerson);
      res.send({ newPerson });
    }
    catch (error) {
      console.log(error);
    }
  };

  return { addPerson };
}
