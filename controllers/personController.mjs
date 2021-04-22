// db is an argument to this function so
// that we can make db queries inside
export default function initPeopleController(db) {
  const index = async (request, response) => {
    try {
      const allPeople = await db.Person.findAll({
        where: { billID: request.body.billIndex },
      });
      response.send(allPeople);
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      console.log(request.body);
      const person = await db.Person.create({
        name: request.body.name,
        amount: 0,
        billId: request.body.billIndex,
      });
      console.log(`${person.id} is created!`);
      response.send(person);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (request, response) => {
    try {
      console.log(request.body);
    } catch (error) {
      console.log(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    create,
    update,
  };
}
