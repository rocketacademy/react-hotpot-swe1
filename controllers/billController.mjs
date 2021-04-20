// db is an argument to this function so
// that we can make db queries inside
export default function initBillsController(db) {
  const index = async (request, response) => {
    try {
      const allBills = await db.Bill.findAll();
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
