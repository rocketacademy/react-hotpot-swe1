// db is an argument to this function so
// that we can make db queries inside
export default function initPeopleController(db) {
  const index = async (request, response) => {
    try {
      const allPeople = await db.Bill.findAll();
    } catch (error) {
      console.log(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
