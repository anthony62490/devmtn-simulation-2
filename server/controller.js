function getHouses(req, res, next) //get
{
  const dbInst = req.app.get('db');
  dbInst.get_houses()
    .then(response => {
      console.log("Response 1 = ", response)
      return res.status(200).send(response)
    })
    .catch(err => res.status(500).send(`Error in getData(): ${err}`));
}

function newHouse(req, res, next) //put
{
  const {name, address, city, state, zip, img, mortgage, rent} = req.body;
  const dbInst = req.app.get('db');
  dbInst.new_house([name, address, city, state, zip, img, mortgage, rent])
    .then(response => {
      console.log("Response 2 = ", response)
      return res.status(200).send(response)
    })
    .catch(err => res.status(500).send(`Error in newHouse(): ${err}`));
}

function deleteHouse(req, res, next) //delete
{
  console.log(req.params.id);
  const index = Number(req.params.id);
  const dbInst = req.app.get('db');
  dbInst.delete_house(index)
    .then(response => {
      console.log("Response 3 = ", response)
      return res.status(200).send(response)
    })
    .catch(err => res.status(500).send(`Error in deleteHouse(): ${err}`));
}

module.exports =
{
  getHouses,
  newHouse,
  deleteHouse
};