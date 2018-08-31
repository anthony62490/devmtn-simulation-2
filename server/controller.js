function getData(req, res, next)
{
  const dbInst = req.app.get('db');
  dbInst.get_data()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(`Error in getData(): ${err}`));
}

module.exports =
{
  getData
};